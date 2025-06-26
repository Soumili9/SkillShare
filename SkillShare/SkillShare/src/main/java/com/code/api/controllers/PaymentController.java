package com.code.api.controllers;

import java.time.format.DateTimeFormatter; 

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.code.api.models.*;
import com.code.api.services.*;
import com.razorpay.RazorpayClient;

@RestController
@RequestMapping("api/payment/")
public class PaymentController {

    @Value("${razorpay.key_id}")
    private String keyId;

    @Value("${razorpay.key_secret}")
    private String keySecret;

    @Autowired
    ICourseEnrollmentService enrollmentService;

    @Autowired
    IUsersService usersService;

    @Autowired
    IPaymentService paymentService;

    @Autowired
    ICourseEnrollmentDetailsService enrollmentDetailsService;

    @PostMapping(value = "createorder")
    public ResponseEntity<?> create(@RequestBody EnrollmentRequestDTO request) throws Exception {
        double total = request.getTotalFee();
        RazorpayClient client = new RazorpayClient(keyId, keySecret);
        JSONObject options = new JSONObject();
        options.put("amount", (int)(total * 100));
        options.put("currency", "INR");
        options.put("receipt", "txn_" + System.currentTimeMillis());

        com.razorpay.Order razorOrder = client.orders.create(options);

        CourseEnrollment enrollment = new CourseEnrollment();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");
        String formattedDate = enrollment.getCreatedAt().format(formatter);
        enrollment.setEnrollDate(formattedDate);

        Users users = usersService.getUserById(request.getUserid());
        enrollment.setUsers(users);
        enrollment.setRazorpayOrderId(razorOrder.get("id"));
        enrollment.setTotalFee(total);
        enrollment.setStatus("CREATED");

        enrollmentService.add(enrollment);

        for (CourseCartItem item : request.getItems()) {
            CourseEnrollmentDetails detail = new CourseEnrollmentDetails();
            detail.setCourseTitle(item.getCourseTitle());
            detail.setCategoryName(item.getCategory().getCatname());
            detail.setPrice(item.getCoursePrice());
            detail.setQty(item.getQuantity());
            detail.setTotal(detail.getPrice() * detail.getQty());
            detail.setCourseEnrollment(enrollment);
            enrollmentDetailsService.add(detail);
        }

        return ResponseEntity.ok(enrollment);
    }

    @PostMapping(value = "confirmpayment")
    public Payment confirmPayment(@RequestBody ConfirmPaymentRequest crequest) {
        CourseEnrollment enrollment = enrollmentService.getByRazorpayOrderId(crequest.getRazorpayOrderId());
        if (enrollment == null)
            return null;

        Payment payment = new Payment();
        payment.setEnrollment(enrollment);
        payment.setRazorpayPaymentId(crequest.getRazorpayPaymentId());
        payment.setAmount(enrollment.getTotalFee());
        payment.setStatus("SUCCESS");

        enrollment.setStatus("PAID");
        enrollmentService.update(enrollment);
        paymentService.creatPayment(payment);

        return payment;
    }

    @GetMapping(value = "getRazorpayOrderId/{id}")
    public CourseEnrollment getRazorId(@PathVariable("id") String id) {
        return enrollmentService.getByRazorpayOrderId(id);
    }
}
