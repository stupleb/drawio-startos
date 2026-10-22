ARG IMAGE
FROM ${IMAGE}
USER root
# The JVM trusts its own cacerts, fixed when the JDK was built, not the system store.
RUN apt-get update \
 && apt-get install -y --only-upgrade ca-certificates \
 && rm -rf /var/lib/apt/lists/* \
 && trust extract --overwrite --format=java-cacerts --filter=ca-anchors --purpose=server-auth \
      "$JAVA_HOME/lib/security/cacerts" \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt \
 && keytool -list -v -cacerts -storepass changeit > /tmp/cacerts.txt \
 && ! grep -q 'CN=emSign ECC Root CA - G3' /tmp/cacerts.txt \
 && rm /tmp/cacerts.txt
USER tomcat
