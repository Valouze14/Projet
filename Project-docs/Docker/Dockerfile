# Utiliser la dernière image officielle de Nginx
FROM nginx:latest

# Copier le répertoire contenant le html,css,js dans le répertoire de service de Nginx
COPY Website_content /usr/share/nginx/html

# Copier notre default.conf dans le répertoire de service de Nginx
COPY Config/nginx/conf/default.conf /etc/nginx/conf.d/default.conf

# Copier le fichier PDF dans le répertoire de service de Nginx
COPY Website_content/rapport.pdf /usr/share/nginx/html/mon_fichier.pdf

# Copier les certificats SSL dans le répertoire de service de Nginx
COPY Config/nginx/certs/server.crt /etc/nginx/certs/server.crt
COPY Config/nginx/certs/server.key /etc/nginx/certs/server.key
