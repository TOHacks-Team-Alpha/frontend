build:
	docker build -t ruhacks-frontend .

run:
	docker run  --rm -d -p 8080:8080 \
		--name ruhacks-frontend ruhacks-frontend	

kill:
	docker kill ruhacks-frontend

	
cloud:
	docker tag ruhacks-frontend gcr.io/diabetech-515ed/ruhacks-frontend
	docker push gcr.io/diabetech-515ed/ruhacks-frontend


dhub:
	docker tag ruhacks-frontend alphakilo07/ruhacks-frontend
	docker push alphakilo07/ruhacks-frontend