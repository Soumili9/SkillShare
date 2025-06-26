package com.code.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid")
    private int userid;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "emailid", nullable = false, length = 50, unique = true)
    private String emailid;

    @Column(name = "password", nullable = false, length = 20)
    private String password;

    @Column(name = "role", nullable = false, length = 20)
    private String role;

    public Users() {
        this.name = null;
        this.emailid = null;
        this.password = null;
        this.role = null;
    }

    public Users(String name, String emailid, String password, String role) {
        this.name = name;
        this.emailid = emailid;
        this.password = password;
        this.role = role;
    }

    // Getters and Setters
    public int getUserid() { return userid; }
    public void setUserid(int userid) { this.userid = userid; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmailid() { return emailid; }
    public void setEmailid(String emailid) { this.emailid = emailid; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}
