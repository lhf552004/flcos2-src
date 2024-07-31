package com.enisco.flcos.server.scheme;

import java.util.List;

/**
 * A scheme listener is an app that uses schemes and needs to be informed about any changes on schemes following
 * methods must be implemented
 * <ul>
 * <li>Check if this listener uses a scheme</li>
 * </ul>
 */
public interface SchemeListener
{

    /**
     * Returns a list with all apps that uses this scheme. If the scheme is not used, an empty array is
     * returned.
     */
    List<String> isUsedIn(String schemeName);

}
