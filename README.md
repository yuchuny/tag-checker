# Tag-checker

This is an exercise, check the tags in a paragraph are correct or not, it'll read the content of the input file and check the tags.
- Empty string or no tag paragraph are both considered as correct.


# Example
## Correct ones: 
- The following text&lt;C&gt;&lt;B&gt;is centred and in boldface&lt;/B&gt;&lt;/C&gt;
- &lt;B&gt;This &lt;\\g&gt; is &lt;B&gt;boldface&lt;/B&gt; in &lt;&lt;*&gt; a&lt;/B&gt; &lt;\\6&gt; &lt;&lt;d&gt;sentence

## Incorrect ones: 
- &lt;B&gt;&lt;C&gt; This should be centred and in boldface, but the tags are wrongly nested &lt;/B&gt;&lt;/C&gt;
- &lt;B&gt;This should be in boldface, but there is an extra closing tag&lt;/B&gt;&lt;/C&gt;
- &lt;B&gt;&lt;C&gt;This should be centred and in boldface, but there is a missing closing tag&lt;/C&gt;

# Usage

With [npm](https://npmjs.org) do:

```
npm install
npm run start <your input file>
```