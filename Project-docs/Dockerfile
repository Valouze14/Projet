# Utiliser la dernière image officielle de Nginx
FROM nginx:latest

# Copier la page HTML dans le répertoire de service de Nginx
COPY Website_content /usr/share/nginx/html
COPY Config/nginx/conf/default.conf /etc/nginx/conf.d/default.conf

COPY Website_content/rapport.pdf /usr/share/nginx/html/mon_fichier.pdf

COPY Config/nginx/certs/server.crt /etc/nginx/certs/server.crt
COPY Config/nginx/certs/server.key /etc/nginx/certs/server.key
