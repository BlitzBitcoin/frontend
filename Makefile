### Setup #############################################################
install-bash-dependencies:
# prep for Dockerfile
	./dependencies.sh

### Development #######################################################
start-app:
	npx expo start

start-app-2:
# if having trouble previewing on mobile via Expo Go
# (https://docs.expo.dev/workflow/run-on-device/#running-a-project-in-expo-go)
	npx expo start --tunnel

### DevOps ############################################################
deploy-gh-pages:
# deploys an update to package.json/"homepage"
	yarn deploy

graph-directory:
# for updating directory map in README.md
	tree -L 2 -I "node_modules|web-build|.expo"