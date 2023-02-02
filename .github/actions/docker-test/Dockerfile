FROM denoland/deno

WORKDIR /app

USER deno

ADD . .
RUN deno cache main.ts

ENTRYPOINT [ "deno", "run", "--allow-env", "--allow-read", "main.ts" ]
