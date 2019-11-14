package pl.lickerish.websocketchat.models;

import lombok.Data;

import java.util.Date;

@Data
public class Message {
    private String name;
    private String content;
    private Date time = new Date();
}
