package com.enisco.flcos.server;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.nio.file.Paths;

public class FileControllerTest {
    @Test
    void file_test() {
        var path = Paths.get("")
                .toAbsolutePath()
                .getParent()
                .toString();
        System.out.println(path);
    }
}
