-- player's average distance for a particular club
select avg(s.distance)
from stroke s
join player p
on s.player_id = p.id
join club c
on s.club_id = c.id
where s.player_id = '1c45881f-d978-4cfd-a00d-6261ac28f0bd'
and c.club = '3-hybrid';

-- player's putting accuracy from a certain distance
select
	(select count(*)
	from putt pu
	join player pl
	on pu.player_id = pl.id
	join putt_result pr
	on pu.putt_result_id = pr.id
	where pu.player_id = '1c45881f-d978-4cfd-a00d-6261ac28f0bd'
	and pu.distance = 5
	and pr.putt_result = 'sink') /
    (select count(*)
	from putt pu
	join player pl
	on pu.player_id = pl.id
	where pu.player_id = '1c45881f-d978-4cfd-a00d-6261ac28f0bd'
	and pu.distance = 5) * 100
as accuracy_in_percent;
    