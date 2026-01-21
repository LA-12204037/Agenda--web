#Indica  la imagen base 

FROM nginx:1.27

# copiar mi proyecto a la imagen 
COPY . /usr/share/nginx/html