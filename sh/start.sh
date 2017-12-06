#! bin/zsh

sudo launchctl load /Library/LaunchDaemons/com.syncNode.launchctl.plist;
echo "launchctl has started,and it will sync node repo during Monday to Friday at 18 o'clock";