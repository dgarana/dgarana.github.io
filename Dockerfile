FROM httpd:latest
MAINTAINER dgarana@live.com

COPY ./src/ /usr/local/apache2/htdocs/
