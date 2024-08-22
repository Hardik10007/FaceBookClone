package com.Hardik.Facebookclone.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    private String Id;
    private String post;
    private String name;
    private String email;
    private String image;
    private String file;
    private String profilepic;
    private String timeStamp;
    private String imageName;
}
