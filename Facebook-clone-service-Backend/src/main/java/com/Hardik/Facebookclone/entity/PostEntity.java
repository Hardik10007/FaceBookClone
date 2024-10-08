package com.Hardik.Facebookclone.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "posts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String Id;

    @Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String post;
    private String name;
    private String email;

    @Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String image;
    private String profilepic;
    private String timeStamp;
    private String imageName;
}
