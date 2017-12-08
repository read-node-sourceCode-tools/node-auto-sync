#! bin/zsh

nodebasepath=$1;
echo '----------';
echo `date`;
echo '----------';
cd $nodebasepath;
git fetch upstream;
git merge upstream/master;
git push origin master;