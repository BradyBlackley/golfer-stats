CREATE TABLE player (
	id VARCHAR(36),
	username VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE club (
	id INT AUTO_INCREMENT,
    club ENUM(
    'driver', 
    '3-wood', 
    '4-wood', 
    '5-wood', 
    '7-wood', 
    '2-hybrid',
    '3-hybrid',
    '4-hybrid',
    '5-hybrid',
	'2-iron', 
	'3-iron', 
	'4-iron', 
	'5-iron', 
	'6-iron', 
    '7-iron',
    '8-iron', 
    '9-iron', 
    'P-wedge',
    'G-wedge',
    'S-wedge',
    'L-wedge',
    'putter'
    ),
    PRIMARY KEY(id)
);

insert into club (club) values 
    ('driver'), 
    ('3-wood'), 
    ('4-wood'), 
    ('5-wood'), 
    ('7-wood'), 
    ('2-hybrid'),
    ('3-hybrid'),
    ('4-hybrid'),
    ('5-hybrid'),
	('2-iron'), 
	('3-iron'), 
	('4-iron'), 
	('5-iron'), 
	('6-iron'), 
    ('7-iron'),
    ('8-iron'), 
    ('9-iron'), 
    ('P-wedge'),
    ('G-wedge'),
    ('S-wedge'),
    ('L-wedge'),
    ('putter');
    
CREATE TABLE contact_type (
	id INT AUTO_INCREMENT,
    contact_type ENUM(
    'flush', 
    'miss hit - thin',
    'miss hit - fat',
    'miss hit - toe',
    'miss hit - heel',
    'miss'
    ),
    PRIMARY KEY(id)
);

insert into contact_type (contact_type) values 
    ('flush'), 
    ('miss hit - thin'), 
    ('miss hit - fat'),
    ('miss hit - toe'),
    ('miss hit - heel'),
    ('miss');

CREATE TABLE ball_flight_type (
	id INT AUTO_INCREMENT,
    ball_flight_type ENUM(
    'straight',
    'straight-draw',
    'straight-fade',
    'push',
    'push-draw',
    'push-fade',
    'push-slice',
    'pull',
    'pull-draw',
    'pull-fade',
    'pull-hook',
    'roller'
    ),
    PRIMARY KEY(id)
);

insert into ball_flight_type (ball_flight_type) values 
    ('straight'), 
    ('straight-draw'), 
    ('straight-fade'),
    ('push'),
    ('push-draw'),
    ('push-fade'),
    ('push-slice'),
    ('pull'),
    ('pull-draw'),
    ('pull-fade'),
    ('pull-hook'),
    ('roller');
    
CREATE TABLE stroke (
    id VARCHAR(36),
    player_id VARCHAR(36),
    club_id INT,
    distance SMALLINT,
    contact_type_id INT,
    ball_flight_type_id INT,
    `date` DATE,
    PRIMARY KEY(id),
    FOREIGN KEY (player_id) REFERENCES player(id),
    FOREIGN KEY (club_id) REFERENCES club(id),
    FOREIGN KEY (contact_type_id) REFERENCES contact_type(id),
    FOREIGN KEY (ball_flight_type_id) REFERENCES ball_flight_type(id)
);