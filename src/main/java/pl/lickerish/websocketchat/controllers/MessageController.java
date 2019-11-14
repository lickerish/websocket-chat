package pl.lickerish.websocketchat.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import pl.lickerish.websocketchat.models.Message;

@Controller
public class MessageController {

    @MessageMapping("/hello")
    @SendTo("topic/invitation")
    public Message message(@Payload Message message) {
        return message;
    }

}
