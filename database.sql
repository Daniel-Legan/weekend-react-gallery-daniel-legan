-- database name: react_gallery

DROP TABLE IF EXISTS "gallery";

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"likes" INT DEFAULT 0 NOT NULL
);

INSERT INTO "gallery" ("path", "description")
VALUES ('images/IMG_0099.jpeg', 'A hike in Colorado Springs.'), 
('images/IMG_0615.jpeg', 'My first time at Jollibee on a trip to Chicago.'),
('images/IMG_0519.jpg', 'The time I caught a cool fish in Miami.'),
('images/IMG_1146.jpeg', 'Enjoying life on the Stone Arch Bridge.'),
('images/IMG_1229.jpeg', 'Hiking the Hollywood sign in Los Angeles.'),
('images/IMG_1291.jpeg', 'Almost freezing to death while ice fishing.'),
('images/IMG_1523.jpeg', 'The only time I''ve ever seen my girlfriend wear makeup.'),
('images/IMG_1782.jpeg', 'A small day hike at Jay Cooke state park in Duluth, MN.'),
('images/IMG_2924.jpeg', 'Alpine lake in summer outside Seattle, WA.'),
('images/IMG_3046.jpeg', 'Exploring Mt. Rainier National Park.'),
('images/IMG_3211.jpeg', 'Lake Colchuck in The Enchantments.'),
('images/IMG_3672.jpeg', 'Being eaten alive by a ferocious bear.');