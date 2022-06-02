package com.enisco.flcos.server.util;

import com.enisco.flcos.server.dto.job.MessageDto;

import java.util.ArrayList;

public class MessageUtil {
    public static MessageDto getNewMessage() {
        var message = new MessageDto();
        var errors = new ArrayList<String>();
        var infos = new ArrayList<String>();
        message.setErrors(errors);
        message.setInfos(infos);
        return message;
    }
}
