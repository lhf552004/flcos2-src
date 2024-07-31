package com.enisco.flcos.server.scheme;

import org.springframework.stereotype.Component;

import javax.ejb.Singleton;
import java.util.HashMap;
import java.util.Map;

@Singleton
@Component
public class SchemeListenerRegistrations
{
    private Map<String, SchemeListener> listeners = new HashMap<>();

    public Map<String, SchemeListener> getSchemeListeners()
    {
        return listeners;
    }

    public void addSchemeListener(String name, SchemeListener listener)
    {
        listeners.put(name, listener);
    }

    public void removeSchemeListener(String name)
    {
        listeners.remove(name);
    }
}
