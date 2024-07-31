package com.enisco.flcos.server.util;

import com.enisco.flcos.server.exceptions.FLCosException;
import com.enisco.flcos.server.scheme.Scheme;
import com.enisco.flcos.server.scheme.SchemeManager;

public final class SchemeUtil
{
    private SchemeUtil()
    {

    }

    public static Scheme assertSchemeExists(SchemeManager schemeManager, String name)
    {
        var scheme = schemeManager.getScheme(name);
        if ( scheme != null )
        {
            return scheme;
        }

        throw new FLCosException("Scheme [" + name + "] does not exist!");
    }
}
