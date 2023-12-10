


https://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-Z]', 'gi')

//리터럴
/표현/옵션
/[a-Z]/gi
```

## 예제 문자

```js
const str =`
010-1234-5678
thesecon@gmmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy  dog.
abbcccd

```

## 메소드

메소드 | 문법 | 설명

--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array)
반환
replace | `문자열.replace(정규식, 대체문자)` |일치하는
문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi lice)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(line) 시작에 있는 ab와 일치
ab$ | 줄(line) 끝에 있는 ab와 일치