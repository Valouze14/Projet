# Utiliser la dernière image officielle de Nginx
FROM nginx:latest

# Copier la page HTML dans le répertoire de service de Nginx
COPY /html /usr/share/nginx/html
COPY nginx/conf/default.conf /etc/nginx/conf.d/default.conf

COPY ./Projet.pdf /usr/share/nginx/html/mon_fichier.pdf

COPY nginx/certs/server.crt /etc/nginx/certs/server.crt
COPY nginx/certs/server.key /etc/nginx/certs/server.key
