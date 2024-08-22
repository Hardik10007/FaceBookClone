package com.Hardik.Facebookclone.controller;

import com.Hardik.Facebookclone.model.Post;
import com.Hardik.Facebookclone.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    private PostService postService;

    public PostController(PostService postService){
        this.postService = postService;
    }

    @PostMapping("")
    public Post addPost(@RequestParam Map<String,String> requestparams) throws Exception {
        String strPost = requestparams.get("post");
        String email = requestparams.get("email");
        String name = requestparams.get("name");
        String file = requestparams.get("file");
        String profilepic = requestparams.get("profilepic");

        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strPost)
                .profilepic(profilepic)
                .timeStamp(new Date().toString())
                .build();

        post = postService.addPost(post);
        return post;
    }

    @GetMapping("")
    public List<Post> getPost(){
        return postService.getPost();
    }

}
