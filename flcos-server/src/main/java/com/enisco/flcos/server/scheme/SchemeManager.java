package com.enisco.flcos.server.scheme;

import java.util.List;
import java.util.Map;

public interface SchemeManager {
    String LOOKUP = "java:global/platform-ear/platform-scheme-server/SchemeManagerBean!enisco.emes.platform.api.server.scheme.SchemeManager";

    Scheme getScheme(String var1);

    Scheme getScheme(Long Id);

    boolean exists(String var1);

    String[] getAllNames();

    SchemeValidationResponse validate(SchemeValidationRequest var1);

    void register(String var1, String var2);

    Map<String, List<String>> isInUsage(String var1);

    void registerSchemeChangeListener(String var1, String var2, SchemeListenerState... var3);

    void unRegisterSchemeChangeListener(String var1);
}
