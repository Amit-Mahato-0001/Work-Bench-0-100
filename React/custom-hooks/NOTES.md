Why custom hooks??
tumhare app me:
API call logic repeat ho raha he
loading/error logic repeat ho raha he 
window resize, scroll, auth logic repeat ho raha he

kya har component me same useEffect + useState copy-paste karenge??

NAHI

bad practice
hard to maintain

Custom hook > A custom hook is a javaScript function that starts with use and allows us to reuse stateful logic using React hooks.

RULE 1: custom hook ka name "use" se start hona chahiye
RULE 2: hooks sirf react component ya custom hook ke ander call hote he

