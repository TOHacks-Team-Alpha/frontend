build:
	docker build -t tohacks-frontend .

run:
	docker run  --rm -d -p 8080:8080 \
		--name tohacks-frontend tohacks-frontend	

kill:
	docker kill tohacks-frontend

	
cloud:
	docker tag tohacks-frontend gcr.io/vagon-abe86/tohacks-frontend
	docker push gcr.io/vagon-abe86/tohacks-frontend


dhub:
	docker tag tohacks-frontend alphakilo07/tohacks-frontend
	docker push alphakilo07/tohacks-frontend