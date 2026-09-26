# Live site snapshot — hotels.skillhunter.jp

This branch is a **built copy** of the live site (Next.js static export), taken 2026-09-27
from `/var/www/hotels` on the VPS. It is NOT editable source code.

Why it exists: the live site was uploaded on 2026-06-25 from source code that is not on
`main` (hero promo video, /pv* and /edu* pages, /guides/). This branch preserves everything
live until that source is pushed.

Includes the 2026-09-27 change: hotel brand logos removed from the homepage.

Restore to the server (replaces live site exactly):

    rsync -az --delete ./ root@192.227.184.217:/var/www/hotels/ --exclude .git --exclude README-SNAPSHOT.md
