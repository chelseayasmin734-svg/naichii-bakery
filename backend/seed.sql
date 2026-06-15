USE naichii_bakery;

INSERT INTO admins (name, email, password)
VALUES ('Admin Naichii', 'admin@naichii.com', '$2a$10$zrF8ywOk7c7C5Hxmc36xAOSLWC9GCAFiIhSgZWT4rX81xDJhZcFAW');

INSERT INTO users (name, email, password, phone, role)
VALUES
('Admin Naichii', 'admin@naichii.com', '$2a$10$zrF8ywOk7c7C5Hxmc36xAOSLWC9GCAFiIhSgZWT4rX81xDJhZcFAW', '+6281234567890', 'admin'),
('Pelanggan Naichii', 'customer@naichii.com', '$2a$10$zrF8ywOk7c7C5Hxmc36xAOSLWC9GCAFiIhSgZWT4rX81xDJhZcFAW', '+6289876543210', 'customer');

INSERT INTO categories (name, description)
VALUES
('Croissant', 'Lapis renyah dan lembut'),
('Roti Manis', 'Roti manis untuk sarapan'),
('Cake', 'Kue premium untuk momen spesial'),
('Pastry', 'Pastry fresh dan lezat'),
('Donat', 'Donat lembut dengan topping istimewa'),
('Cookies', 'Cookies renyah dan kacang'),
('Paket Sarapan', 'Kombinasi sarapan hangat');

INSERT INTO products (category_id, name, slug, price, stock, rating, reviews, description)
VALUES
(1,'Croissant Butter Premium','croissant-butter-premium',42000,30,4.9,218,'Croissant renyah dengan lapisan butter premium, dibuat fresh setiap hari.'),
(1,'Chocolate Croissant','chocolate-croissant',45000,24,4.8,164,'Croissant isi cokelat lumer dengan aroma mentega yang menggoda.'),
(1,'Almond Croissant','almond-croissant',47000,18,4.9,142,'Croissant almond renyah dengan taburan kacang premium dan gula halus.'),
(4,'Strawberry Danish','strawberry-danish',39000,26,4.8,136,'Pastry Danish strawberry segar dengan lapisan gula manis.'),
(4,'Cheese Danish','cheese-danish',40000,22,4.8,120,'Pastry cheese lembut dengan rasa gurih dan tekstur flaky.'),
(2,'Cinnamon Roll','cinnamon-roll',36000,28,4.7,110,'Cinnamon roll panas dengan taburan gula manis dan kayu manis.'),
(5,'Donat Coklat','donat-coklat',29000,40,4.7,154,'Donat coklat lembut dengan topping coklat premium.'),
(5,'Donat Strawberry','donat-strawberry',29000,38,4.7,148,'Donat strawberry manis dengan glasir segar.'),
(2,'Roti Sosis','roti-sosis',25000,34,4.6,96,'Roti sosis hangat dengan tekstur lembut dan isian juicy.'),
(2,'Roti Abon','roti-abon',26000,30,4.6,102,'Roti abon gurih dengan lapisan abon premium.'),
(3,'Red Velvet Cake','red-velvet-cake',180000,12,4.9,82,'Kue red velvet premium dengan krim manis lembut.'),
(3,'Black Forest Cake','black-forest-cake',190000,10,4.9,76,'Kue black forest klasik dengan lapisan coklat dan ceri.'),
(6,'Choco Cookies','choco-cookies',22000,44,4.8,128,'Cookies coklat renyah dengan potongan coklat pekat.'),
(6,'Butter Cookies','butter-cookies',21000,42,4.8,122,'Cookies butter lembut dan gurih, cocok untuk teh.' );

INSERT INTO product_images (product_id, image_url, is_primary)
VALUES
(1,'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',TRUE),
(1,'https://images.unsplash.com/photo-1548365328-3344f98aa1d7?auto=format&fit=crop&w=1200&q=80',FALSE),
(1,'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=1200&q=80',FALSE),
(2,'https://images.unsplash.com/photo-1601047118693-2f0ab699d86f?auto=format&fit=crop&w=1200&q=80',TRUE),
(2,'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',FALSE),
(2,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(3,'https://images.unsplash.com/photo-1434494878577-86c23a4479d5?auto=format&fit=crop&w=1200&q=80',TRUE),
(3,'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=1200&q=80',FALSE),
(3,'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',FALSE),
(4,'https://images.unsplash.com/photo-1559622213-6cce5d4adf38?auto=format&fit=crop&w=1200&q=80',TRUE),
(4,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),
(4,'https://images.unsplash.com/photo-1612392061785-3b1f0de86bb0?auto=format&fit=crop&w=1200&q=80',FALSE),
(5,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',TRUE),
(5,'https://images.unsplash.com/photo-1544185518-539ed3f67aa4?auto=format&fit=crop&w=1200&q=80',FALSE),
(5,'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80',FALSE),
(6,'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',TRUE),
(6,'https://images.unsplash.com/photo-1594007653779-0f7bd5b6ff94?auto=format&fit=crop&w=1200&q=80',FALSE),
(6,'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80',FALSE),
(7,'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',TRUE),
(7,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),
(7,'https://images.unsplash.com/photo-1514587903-9388be7df0ba?auto=format&fit=crop&w=1200&q=80',FALSE),
(8,'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1200&q=80',TRUE),
(8,'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',FALSE),
(8,'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',FALSE),
(9,'https://images.unsplash.com/photo-1541592106381-1be7910aca5d?auto=format&fit=crop&w=1200&q=80',TRUE),
(9,'https://images.unsplash.com/photo-1590086782790-0db3f945170f?auto=format&fit=crop&w=1200&q=80',FALSE),
(9,'https://images.unsplash.com/photo-1580221869365-1a3605fa4e00?auto=format&fit=crop&w=1200&q=80',FALSE),
(10,'https://images.unsplash.com/photo-1496970842494-0c7df5db8c27?auto=format&fit=crop&w=1200&q=80',TRUE),
(10,'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=80',FALSE),
(10,'https://images.unsplash.com/photo-1505576391880-11d631d8ce68?auto=format&fit=crop&w=1200&q=80',FALSE),
(11,'https://images.unsplash.com/photo-1512058564366-c9e7d0b0247b?auto=format&fit=crop&w=1200&q=80',TRUE),
(11,'https://images.unsplash.com/photo-1513869501782-3d4f7cc1b6f7?auto=format&fit=crop&w=1200&q=80',FALSE),
(11,'https://images.unsplash.com/photo-1521302081003-3af61de0c6be?auto=format&fit=crop&w=1200&q=80',FALSE),
(12,'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',TRUE),
(12,'https://images.unsplash.com/photo-1605470692257-7c6b6ff4e6d4?auto=format&fit=crop&w=1200&q=80',FALSE),
(12,'https://images.unsplash.com/photo-1528701800489-20b9d66ba2c1?auto=format&fit=crop&w=1200&q=80',FALSE),
(13,'https://images.unsplash.com/photo-1541976076758-65684f7c0bc1?auto=format&fit=crop&w=1200&q=80',TRUE),
(13,'https://images.unsplash.com/photo-1505253213579-3dde0f1d1cd1?auto=format&fit=crop&w=1200&q=80',FALSE),
(13,'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80',FALSE),
(14,'https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1200&q=80',TRUE),
(14,'https://images.unsplash.com/photo-1563805042-7684f26f5d67?auto=format&fit=crop&w=1200&q=80',FALSE),
(14,'https://images.unsplash.com/photo-1512058564366-c9e7d0b0247b?auto=format&fit=crop&w=1200&q=80',FALSE);

INSERT INTO product_variants (product_id, name, additional_price)
VALUES
(1,'Regular',0),
(1,'Pack 2',5000),
(2,'Regular',0),
(2,'Pack 2',5000),
(3,'Regular',0),
(3,'Pack 2',5000),
(4,'Regular',0),
(4,'Pack 2',5000),
(5,'Regular',0),
(6,'Regular',0),
(7,'Regular',0),
(8,'Regular',0),
(9,'Regular',0),
(10,'Regular',0),
(11,'Small',0),
(11,'Medium',30000),
(12,'Small',0),
(12,'Medium',30000),
(13,'Pack 6',0),
(14,'Pack 6',0);

INSERT INTO promotions (title, code, discount_percentage, free_shipping, active, starts_at, ends_at)
VALUES
('Diskon Sarapan Pagi','SARAPAN15',15,TRUE,TRUE,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 14 DAY)),
('Bebas Ongkir Weekend','ONGKIR0',0,TRUE,TRUE,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 7 DAY));

INSERT INTO reviews (user_id, product_id, rating, review_text, approved)
VALUES
(2,1,5,'Croissant paling lembut yang pernah saya coba!','1'),
(2,2,5,'Coklatnya lumer dan pas sekali di lidah.','1'),
(2,11,5,'Kue red velvet nya moist dan sangat memuaskan.','1');
