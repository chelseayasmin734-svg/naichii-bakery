USE naichii_bakery;

DELETE FROM reviews;
DELETE FROM product_images;
DELETE FROM product_variants;
DELETE FROM products;
DELETE FROM promotions;
DELETE FROM orders;
DELETE FROM carts;
DELETE FROM admins;
DELETE FROM users;
DELETE FROM categories;

INSERT INTO admins (name, email, password) VALUES ('Admin Naichii', 'admin@naichii.com', '$2a$10$zrF8ywOk7c7C5Hxmc36xAOSLWC9GCAFiIhSgZWT4rX81xDJhZcFAW');

INSERT INTO users (name, email, password, phone, role) VALUES
('Admin Naichii', 'admin@naichii.com', '$2a$10$zrF8ywOk7c7C5Hxmc36xAOSLWC9GCAFiIhSgZWT4rX81xDJhZcFAW', '+6281234567890', 'admin'),
('Pelanggan Naichii', 'customer@naichii.com', '$2a$10$zrF8ywOk7c7C5Hxmc36xAOSLWC9GCAFiIhSgZWT4rX81xDJhZcFAW', '+6289876543210', 'customer');

INSERT INTO categories (name, description) VALUES
('Croissant', 'Lapis renyah dan lembut'),
('Roti Manis', 'Roti manis untuk sarapan'),
('Cake', 'Kue premium untuk momen spesial'),
('Pastry', 'Pastry fresh dan lezat'),
('Donat', 'Donat lembut dengan topping istimewa'),
('Cookies', 'Cookies renyah dan kacang'),
('Paket Sarapan', 'Kombinasi sarapan hangat');

INSERT INTO products (category_id, name, slug, price, stock, rating, reviews, description) VALUES
(1,'Croissant Butter Premium','croissant-butter-premium',42000,50,4.9,218,'Croissant renyah dengan lapisan butter premium, dibuat fresh setiap hari.'),
(1,'Chocolate Croissant','chocolate-croissant',45000,45,4.8,164,'Croissant isi cokelat lumer dengan aroma mentega yang menggoda.'),
(1,'Almond Croissant','almond-croissant',47000,40,4.9,142,'Croissant almond renyah dengan taburan kacang premium dan gula halus.'),
(1,'Pistachio Croissant','pistachio-croissant',48000,35,4.8,108,'Croissant dengan isi pistachio premium dan paste yang creamy.'),
(1,'Hazelnut Croissant','hazelnut-croissant',46000,38,4.7,96,'Croissant dengan spreade hazelnut dan coklat lembut.'),
(1,'Cheese Croissant','cheese-croissant',44000,42,4.8,132,'Croissant dengan isi keju mozzarella yang lumer sempurna.'),
(1,'Spinach & Feta Croissant','spinach-feta-croissant',43000,36,4.6,78,'Croissant savory dengan spinach segar dan keju feta.'),
(4,'Strawberry Danish','strawberry-danish',39000,48,4.8,136,'Pastry Danish strawberry segar dengan lapisan gula manis.'),
(4,'Cheese Danish','cheese-danish',40000,45,4.8,120,'Pastry cheese lembut dengan rasa gurih dan tekstur flaky.'),
(4,'Apple Cinnamon Danish','apple-cinnamon-danish',41000,42,4.7,114,'Pastry dengan potongan apel segar dan kayu manis hangat.'),
(4,'Blueberry Danish','blueberry-danish',40000,40,4.8,128,'Pastry dengan blueberry asli dan cream cheese.'),
(4,'Peach Danish','peach-danish',40500,38,4.7,102,'Pastry dengan jam peach premium dan tekstur lembut.'),
(4,'Raspberry Danish','raspberry-danish',40500,36,4.8,118,'Pastry dengan raspberry segar dan lapisan custard.'),
(4,'Honey Walnut Danish','honey-walnut-danish',42000,34,4.7,92,'Pastry dengan madu alami dan kenari renyah.'),
(4,'Fig & Ricotta Danish','fig-ricotta-danish',43000,32,4.8,88,'Pastry premium dengan fig paste dan ricotta cheese.'),
(2,'Cinnamon Roll','cinnamon-roll',36000,50,4.7,110,'Cinnamon roll panas dengan taburan gula manis dan kayu manis.'),
(2,'Roti Sosis','roti-sosis',25000,55,4.6,96,'Roti sosis hangat dengan tekstur lembut dan isian juicy.'),
(2,'Roti Abon','roti-abon',26000,50,4.6,102,'Roti abon gurih dengan lapisan abon premium.'),
(2,'Roti Manis Coklat','roti-manis-coklat',28000,48,4.7,124,'Roti manis dengan lapisan coklat lumer dan gula taburan.'),
(2,'Roti Manis Keju','roti-manis-keju',29000,45,4.8,118,'Roti manis dengan topping keju mozzarella yang menggugah.'),
(2,'Bolu Pandan','bolu-pandan',24000,52,4.7,88,'Roti manis pandan dengan rasa autentik dan warna hijau alami.'),
(2,'Roti Manis Tuna Mayo','roti-manis-tuna-mayo',27000,46,4.5,76,'Roti manis dengan isi tuna mayo segar dan lezat.'),
(2,'Roti Manis Coklat Chip','roti-manis-coklat-chip',30000,40,4.8,142,'Roti manis dengan coklat chip premium dan tekstur empuk.'),
(5,'Donat Coklat','donat-coklat',29000,60,4.7,154,'Donat coklat lembut dengan topping coklat premium.'),
(5,'Donat Strawberry','donat-strawberry',29000,58,4.7,148,'Donat strawberry manis dengan glasir segar.'),
(5,'Donat Glazed','donat-glazed',27000,62,4.8,166,'Donat original dengan glaze manis yang sempurna.'),
(5,'Donat Matcha','donat-matcha',32000,35,4.8,98,'Donat dengan rasa matcha premium dan tekstur lembut.'),
(5,'Donat Blueberry Cheese','donat-blueberry-cheese',33000,38,4.7,86,'Donat dengan blueberry dan cream cheese premium.'),
(5,'Donat Vanilla Custard','donat-vanilla-custard',30000,45,4.8,134,'Donat dengan isi custard vanilla yang creamy dan lezat.'),
(5,'Donat Rainbow Sprinkles','donat-rainbow-sprinkles',28000,52,4.6,112,'Donat dengan rainbow sprinkles dan warna ceria.'),
(5,'Donat Nutella','donat-nutella',31000,42,4.9,156,'Donat dengan isi Nutella premium dan tekstur sempurna.'),
(3,'Red Velvet Cake','red-velvet-cake',180000,15,4.9,82,'Kue red velvet premium dengan krim manis lembut.'),
(3,'Black Forest Cake','black-forest-cake',190000,12,4.9,76,'Kue black forest klasik dengan lapisan coklat dan ceri.'),
(3,'Chocolate Lava Cake','chocolate-lava-cake',175000,16,4.8,94,'Kue coklat dengan lava center yang mengalir sempurna.'),
(3,'Strawberry Cheesecake','strawberry-cheesecake',185000,14,4.9,88,'Cheesecake dengan strawberry segar dan rasa creamy.'),
(3,'Tiramisu Cake','tiramisu-cake',160000,18,4.8,102,'Kue tiramisu traditional dengan rasa kopi kuat dan manis.'),
(3,'Vanilla Sponge Cake','vanilla-sponge-cake',145000,20,4.7,76,'Kue spon vanilla yang ringan dan empuk sempurna.'),
(3,'Matcha Green Tea Cake','matcha-green-tea-cake',165000,14,4.7,68,'Kue dengan matcha premium dan rasa earthy yang unik.'),
(3,'Carrot Cake with Cream Cheese','carrot-cake-cream-cheese',155000,16,4.8,92,'Kue wortel dengan cream cheese frosting yang lezat.'),
(6,'Choco Cookies','choco-cookies',22000,80,4.8,128,'Cookies coklat renyah dengan potongan coklat pekat.'),
(6,'Butter Cookies','butter-cookies',21000,85,4.8,122,'Cookies butter lembut dan gurih, cocok untuk teh.'),
(6,'Oatmeal Raisin Cookies','oatmeal-raisin-cookies',23000,70,4.7,98,'Cookies dengan oat dan kismis yang memberikan tekstur nikmat.'),
(6,'Macadamia Nut Cookies','macadamia-nut-cookies',25000,55,4.8,84,'Cookies premium dengan macadamia nut utuh.'),
(6,'Peanut Butter Cookies','peanut-butter-cookies',23000,72,4.7,108,'Cookies dengan peanut butter yang creamy dan gurih.'),
(6,'White Choco Macadamia','white-choco-macadamia',26000,52,4.8,96,'Cookies white chocolate dengan macadamia premium.'),
(6,'Lemon Sugar Cookies','lemon-sugar-cookies',22000,68,4.6,82,'Cookies lemon segar dengan gula taburan yang berkilau.'),
(6,'Double Chocolate Chunk','double-chocolate-chunk',24000,64,4.9,142,'Cookies dengan dark dan white chocolate chunks.'),
(7,'Paket Sarapan Lengkap','paket-sarapan-lengkap',89000,30,4.8,76,'Paket sarapan berisi croissant, roti sosis, dan minuman.');

INSERT INTO product_images (product_id, image_url, is_primary) VALUES
(1,'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',TRUE),(1,'https://images.unsplash.com/photo-1548365328-3344f98aa1d7?auto=format&fit=crop&w=1200&q=80',FALSE),(1,'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=1200&q=80',FALSE),
(2,'https://images.unsplash.com/photo-1601047118693-2f0ab699d86f?auto=format&fit=crop&w=1200&q=80',TRUE),(2,'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',FALSE),(2,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(3,'https://images.unsplash.com/photo-1434494878577-86c23a4479d5?auto=format&fit=crop&w=1200&q=80',TRUE),(3,'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=1200&q=80',FALSE),(3,'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',FALSE),
(4,'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',TRUE),(4,'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',FALSE),(4,'https://images.unsplash.com/photo-1511939330857-c735b86e83e0?auto=format&fit=crop&w=1200&q=80',FALSE),
(5,'https://images.unsplash.com/photo-1557804506-669714d2e9d8?auto=format&fit=crop&w=1200&q=80',TRUE),(5,'https://images.unsplash.com/photo-1585958516651-b2b5b5f50e2d?auto=format&fit=crop&w=1200&q=80',FALSE),(5,'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',FALSE),
(6,'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',TRUE),(6,'https://images.unsplash.com/photo-1511638440424-f06b0cdc14cb?auto=format&fit=crop&w=1200&q=80',FALSE),(6,'https://images.unsplash.com/photo-1565958011504-98d902803e5e?auto=format&fit=crop&w=1200&q=80',FALSE),
(7,'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',TRUE),(7,'https://images.unsplash.com/photo-1585958516651-b2b5b5f50e2d?auto=format&fit=crop&w=1200&q=80',FALSE),(7,'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',FALSE),
(8,'https://images.unsplash.com/photo-1559622213-6cce5d4adf38?auto=format&fit=crop&w=1200&q=80',TRUE),(8,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),(8,'https://images.unsplash.com/photo-1612392061785-3b1f0de86bb0?auto=format&fit=crop&w=1200&q=80',FALSE),
(9,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',TRUE),(9,'https://images.unsplash.com/photo-1544185518-539ed3f67aa4?auto=format&fit=crop&w=1200&q=80',FALSE),(9,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(10,'https://images.unsplash.com/photo-1559622213-6cce5d4adf38?auto=format&fit=crop&w=1200&q=80',TRUE),(10,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),(10,'https://images.unsplash.com/photo-1612392061785-3b1f0de86bb0?auto=format&fit=crop&w=1200&q=80',FALSE),
(11,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',TRUE),(11,'https://images.unsplash.com/photo-1544185518-539ed3f67aa4?auto=format&fit=crop&w=1200&q=80',FALSE),(11,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(12,'https://images.unsplash.com/photo-1559622213-6cce5d4adf38?auto=format&fit=crop&w=1200&q=80',TRUE),(12,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),(12,'https://images.unsplash.com/photo-1612392061785-3b1f0de86bb0?auto=format&fit=crop&w=1200&q=80',FALSE),
(13,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',TRUE),(13,'https://images.unsplash.com/photo-1544185518-539ed3f67aa4?auto=format&fit=crop&w=1200&q=80',FALSE),(13,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(14,'https://images.unsplash.com/photo-1559622213-6cce5d4adf38?auto=format&fit=crop&w=1200&q=80',TRUE),(14,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),(14,'https://images.unsplash.com/photo-1612392061785-3b1f0de86bb0?auto=format&fit=crop&w=1200&q=80',FALSE),
(15,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',TRUE),(15,'https://images.unsplash.com/photo-1544185518-539ed3f67aa4?auto=format&fit=crop&w=1200&q=80',FALSE),(15,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(16,'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',TRUE),(16,'https://images.unsplash.com/photo-1594007653779-0f7bd5b6ff94?auto=format&fit=crop&w=1200&q=80',FALSE),(16,'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80',FALSE),
(17,'https://images.unsplash.com/photo-1541976076758-65684f7c0bc1?auto=format&fit=crop&w=1200&q=80',TRUE),(17,'https://images.unsplash.com/photo-1591080876460-a5f4b3feb31b?auto=format&fit=crop&w=1200&q=80',FALSE),(17,'https://images.unsplash.com/photo-1580221869365-1a3605fa4e00?auto=format&fit=crop&w=1200&q=80',FALSE),
(18,'https://images.unsplash.com/photo-1496970842494-0c7df5db8c27?auto=format&fit=crop&w=1200&q=80',TRUE),(18,'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=80',FALSE),(18,'https://images.unsplash.com/photo-1505576391880-11d631d8ce68?auto=format&fit=crop&w=1200&q=80',FALSE),
(19,'https://images.unsplash.com/photo-1600080247140-8c0f82a25f19?auto=format&fit=crop&w=1200&q=80',TRUE),(19,'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',FALSE),(19,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(20,'https://images.unsplash.com/photo-1565958011504-98d902803e5e?auto=format&fit=crop&w=1200&q=80',TRUE),(20,'https://images.unsplash.com/photo-1538241527635-bada812e3b85?auto=format&fit=crop&w=1200&q=80',FALSE),(20,'https://images.unsplash.com/photo-1602080113235-7d440be2dfe6?auto=format&fit=crop&w=1200&q=80',FALSE),
(21,'https://images.unsplash.com/photo-1549007994-cb92cff1b923?auto=format&fit=crop&w=1200&q=80',TRUE),(21,'https://images.unsplash.com/photo-1624897040896-d38c23b1d740?auto=format&fit=crop&w=1200&q=80',FALSE),(21,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(22,'https://images.unsplash.com/photo-1600080247140-8c0f82a25f19?auto=format&fit=crop&w=1200&q=80',TRUE),(22,'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',FALSE),(22,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(23,'https://images.unsplash.com/photo-1565958011504-98d902803e5e?auto=format&fit=crop&w=1200&q=80',TRUE),(23,'https://images.unsplash.com/photo-1538241527635-bada812e3b85?auto=format&fit=crop&w=1200&q=80',FALSE),(23,'https://images.unsplash.com/photo-1602080113235-7d440be2dfe6?auto=format&fit=crop&w=1200&q=80',FALSE),
(24,'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',TRUE),(24,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),(24,'https://images.unsplash.com/photo-1514587903-9388be7df0ba?auto=format&fit=crop&w=1200&q=80',FALSE),
(25,'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1200&q=80',TRUE),(25,'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',FALSE),(25,'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',FALSE),
(26,'https://images.unsplash.com/photo-1631522151566-0b3e9cb62d87?auto=format&fit=crop&w=1200&q=80',TRUE),(26,'https://images.unsplash.com/photo-1624897040896-d38c23b1d740?auto=format&fit=crop&w=1200&q=80',FALSE),(26,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(27,'https://images.unsplash.com/photo-1586985289688-cacb595ddd41?auto=format&fit=crop&w=1200&q=80',TRUE),(27,'https://images.unsplash.com/photo-1606312619070-d48b4c652a38?auto=format&fit=crop&w=1200&q=80',FALSE),(27,'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1200&q=80',FALSE),
(28,'https://images.unsplash.com/photo-1551618618-b0c82f47efb3?auto=format&fit=crop&w=1200&q=80',TRUE),(28,'https://images.unsplash.com/photo-1604958267061-4e5abc9f5827?auto=format&fit=crop&w=1200&q=80',FALSE),(28,'https://images.unsplash.com/photo-1626310518613-1df37d17e8c6?auto=format&fit=crop&w=1200&q=80',FALSE),
(29,'https://images.unsplash.com/photo-1624897040896-d38c23b1d740?auto=format&fit=crop&w=1200&q=80',TRUE),(29,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),(29,'https://images.unsplash.com/photo-1600080247140-8c0f82a25f19?auto=format&fit=crop&w=1200&q=80',FALSE),
(30,'https://images.unsplash.com/photo-1606312619070-d48b4c652a38?auto=format&fit=crop&w=1200&q=80',TRUE),(30,'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1200&q=80',FALSE),(30,'https://images.unsplash.com/photo-1604958267061-4e5abc9f5827?auto=format&fit=crop&w=1200&q=80',FALSE),
(31,'https://images.unsplash.com/photo-1634185556900-d3da5df66d5f?auto=format&fit=crop&w=1200&q=80',TRUE),(31,'https://images.unsplash.com/photo-1626310518613-1df37d17e8c6?auto=format&fit=crop&w=1200&q=80',FALSE),(31,'https://images.unsplash.com/photo-1624897040896-d38c23b1d740?auto=format&fit=crop&w=1200&q=80',FALSE),
(32,'https://images.unsplash.com/photo-1512058564366-c9e7d0b0247b?auto=format&fit=crop&w=1200&q=80',TRUE),(32,'https://images.unsplash.com/photo-1513869501782-3d4f7cc1b6f7?auto=format&fit=crop&w=1200&q=80',FALSE),(32,'https://images.unsplash.com/photo-1521302081003-3af61de0c6be?auto=format&fit=crop&w=1200&q=80',FALSE),
(33,'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',TRUE),(33,'https://images.unsplash.com/photo-1605470692257-7c6b6ff4e6d4?auto=format&fit=crop&w=1200&q=80',FALSE),(33,'https://images.unsplash.com/photo-1528701800489-20b9d66ba2c1?auto=format&fit=crop&w=1200&q=80',FALSE),
(34,'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',TRUE),(34,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),(34,'https://images.unsplash.com/photo-1600080247140-8c0f82a25f19?auto=format&fit=crop&w=1200&q=80',FALSE),
(35,'https://images.unsplash.com/photo-1565958011504-98d902803e5e?auto=format&fit=crop&w=1200&q=80',TRUE),(35,'https://images.unsplash.com/photo-1538241527635-bada812e3b85?auto=format&fit=crop&w=1200&q=80',FALSE),(35,'https://images.unsplash.com/photo-1602080113235-7d440be2dfe6?auto=format&fit=crop&w=1200&q=80',FALSE),
(36,'https://images.unsplash.com/photo-1549007994-cb92cff1b923?auto=format&fit=crop&w=1200&q=80',TRUE),(36,'https://images.unsplash.com/photo-1624897040896-d38c23b1d740?auto=format&fit=crop&w=1200&q=80',FALSE),(36,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(37,'https://images.unsplash.com/photo-1606312619070-d48b4c652a38?auto=format&fit=crop&w=1200&q=80',TRUE),(37,'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1200&q=80',FALSE),(37,'https://images.unsplash.com/photo-1604958267061-4e5abc9f5827?auto=format&fit=crop&w=1200&q=80',FALSE),
(38,'https://images.unsplash.com/photo-1623428760313-e369341ca7e8?auto=format&fit=crop&w=1200&q=80',TRUE),(38,'https://images.unsplash.com/photo-1558636508-e0db3814a69e?auto=format&fit=crop&w=1200&q=80',FALSE),(38,'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',FALSE),
(39,'https://images.unsplash.com/photo-1578056381847-f5b6db4db2cf?auto=format&fit=crop&w=1200&q=80',TRUE),(39,'https://images.unsplash.com/photo-1600080247140-8c0f82a25f19?auto=format&fit=crop&w=1200&q=80',FALSE),(39,'https://images.unsplash.com/photo-1565958011504-98d902803e5e?auto=format&fit=crop&w=1200&q=80',FALSE),
(40,'https://images.unsplash.com/photo-1541976076758-65684f7c0bc1?auto=format&fit=crop&w=1200&q=80',TRUE),(40,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),(40,'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80',FALSE),
(41,'https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1200&q=80',TRUE),(41,'https://images.unsplash.com/photo-1563805042-7684f26f5d67?auto=format&fit=crop&w=1200&q=80',FALSE),(41,'https://images.unsplash.com/photo-1512058564366-c9e7d0b0247b?auto=format&fit=crop&w=1200&q=80',FALSE),
(42,'https://images.unsplash.com/photo-1585080520626-f96ee6b26a6c?auto=format&fit=crop&w=1200&q=80',TRUE),(42,'https://images.unsplash.com/photo-1599599810694-b5ac4dd5ccf1?auto=format&fit=crop&w=1200&q=80',FALSE),(42,'https://images.unsplash.com/photo-1590851150663-128bbd10d74d?auto=format&fit=crop&w=1200&q=80',FALSE),
(43,'https://images.unsplash.com/photo-1621939514649-280e2ee6e7cf?auto=format&fit=crop&w=1200&q=80',TRUE),(43,'https://images.unsplash.com/photo-1590960114312-3b4e051341cb?auto=format&fit=crop&w=1200&q=80',FALSE),(43,'https://images.unsplash.com/photo-1621939514649-280e2ee6e7cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(44,'https://images.unsplash.com/photo-1599599810694-b5ac4dd5ccf1?auto=format&fit=crop&w=1200&q=80',TRUE),(44,'https://images.unsplash.com/photo-1590851150663-128bbd10d74d?auto=format&fit=crop&w=1200&q=80',FALSE),(44,'https://images.unsplash.com/photo-1585080520626-f96ee6b26a6c?auto=format&fit=crop&w=1200&q=80',FALSE),
(45,'https://images.unsplash.com/photo-1599599810694-b5ac4dd5ccf1?auto=format&fit=crop&w=1200&q=80',TRUE),(45,'https://images.unsplash.com/photo-1612392061785-3b1f0de86bb0?auto=format&fit=crop&w=1200&q=80',FALSE),(45,'https://images.unsplash.com/photo-1585080520626-f96ee6b26a6c?auto=format&fit=crop&w=1200&q=80',FALSE),
(46,'https://images.unsplash.com/photo-1621939514649-280e2ee6e7cf?auto=format&fit=crop&w=1200&q=80',TRUE),(46,'https://images.unsplash.com/photo-1590960114312-3b4e051341cb?auto=format&fit=crop&w=1200&q=80',FALSE),(46,'https://images.unsplash.com/photo-1621939514649-280e2ee6e7cf?auto=format&fit=crop&w=1200&q=80',FALSE),
(47,'https://images.unsplash.com/photo-1599599810694-b5ac4dd5ccf1?auto=format&fit=crop&w=1200&q=80',TRUE),(47,'https://images.unsplash.com/photo-1590851150663-128bbd10d74d?auto=format&fit=crop&w=1200&q=80',FALSE),(47,'https://images.unsplash.com/photo-1585080520626-f96ee6b26a6c?auto=format&fit=crop&w=1200&q=80',FALSE),
(48,'https://images.unsplash.com/photo-1557304391-cad34bbb3ad1?auto=format&fit=crop&w=1200&q=80',TRUE),(48,'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1200&q=80',FALSE),(48,'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80',FALSE);

INSERT INTO product_variants (product_id, name, additional_price) VALUES
(1,'Regular',0), (1,'Pack 2',5000), (1,'Pack 6',12000),
(2,'Regular',0), (2,'Pack 2',5000),
(32,'Ukuran Kecil',0), (32,'Ukuran Besar',30000),
(48,'Paket Standar',0), (48,'Paket Premium',20000);

INSERT INTO promotions (title, code, discount_percentage, free_shipping, active, starts_at, ends_at) VALUES
('Diskon Sarapan Pagi','SARAPAN15',15,TRUE,TRUE,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 14 DAY)),
('Bebas Ongkir Weekend','ONGKIR0',0,TRUE,TRUE,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 7 DAY)),
('Flash Sale Pastry','PASTRY25',25,FALSE,TRUE,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 3 DAY)),
('Member Setia','LOYAL20',20,FALSE,TRUE,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 30 DAY));

INSERT INTO reviews (user_id, product_id, rating, review_text, approved) VALUES
(2,1,5,'Croissant paling lembut yang pernah saya coba!','1'),
(2,2,5,'Coklatnya lumer dan pas sekali di lidah.','1'),
(2,32,5,'Kue red velvet nya moist dan sangat memuaskan.','1'),
(2,24,4,'Donatnya enak, tapi lebih suka yang lebih manis.','1'),
(2,40,5,'Cookies yang renyah sempurna, cocok untuk kopi!','1');
