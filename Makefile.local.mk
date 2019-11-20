.DEFAULT_GOAL := help
.PHONY : resources

DOCKER_NETWORK 		= base_network

start: ## Instalar dependencias: make install
	cp application/package.json container/node
	DOCKER_NETWORK=$(DOCKER_NETWORK) \
	docker-compose up
	rm container/node/package.json


build: ## build image to dev and cli: make build
	docker build -f container/node/Dockerfile -t express_api:latest container/node

## Target Help ##
help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help" "Usage"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'