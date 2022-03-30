# Tạo thư mục chứa dự án

APP_NAME=web-reika-fashion

sudo mkdir -p /var/deployments/$APP_NAME-$1
cd /var/deployments/$APP_NAME-$1
sudo rm -rf $APP_NAME-$1
sudo tar -xf ~/build.tar.gz -C .
cd $APP_NAME
pm2 restart $APP_NAME-$1 || pm2 start npm --name $APP_NAME-$1 -- run server-uat

# xóa file compress
rm ~/build.tar.gz