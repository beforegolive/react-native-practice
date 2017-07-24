#!/bin/bash
lastCommit=`git rev-parse HEAD`
while [ 1 ]
do
    echo 'while start...';
		git fetch;
		currCommit=`git rev-parse HEAD`;
		if [ $lastCommit != $currCommit ]
		then
			lastCommit=`git rev-parse HEAD`;
			echo 'start push mirror...';
			git push --mirror https://git.oschina.net/xulianghui1/mirror-push-test.git;
		fi
    sleep 6
done
