#! bin/zsh

nodebasepath=$1;
echo `date`;
cd $nodebasepath;
git fetch upstream;
git merge upstream/master;
git push origin master;