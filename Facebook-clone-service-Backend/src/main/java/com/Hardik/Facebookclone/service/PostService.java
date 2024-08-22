package com.Hardik.Facebookclone.service;

import com.Hardik.Facebookclone.model.Post;

import java.util.List;

public interface PostService {
     List<Post> getPost();
    Post addPost(Post post) throws Exception;
}
