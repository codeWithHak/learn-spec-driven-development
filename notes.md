# SpeckKit Plus

1- Install NodeJs

2- npm install -g @google/gemini-cli

3-  gemini -v

4- gemini (Autheticate) - select OAuth

5- gemini (start your agent)

6- /help (just check)

7- You can cange your model like: gemini --model gemini-2.5-flash

8- To enable shell mode type exclamation mark (!) - Commans: !ls , !pwd

9- To disable shell press escape (esc)

10- Create a simple calculator using uv with gemini cli


## CHAPTER 2


1- gemini -m gemini-2.5-flash --yolo

2- you can enable and disable YOLO mode with (ctrl + y) in the terminal chat

3- press (@) to see all files in the pwd and select them to write anything inside them.
like: @simple-calculator/eval.md Please update the file ....

**4-Debug Mode:**
gemini -m gemini-2.5-flash --debug

/stats model (all model usage)
/stats model (all model requests all tools requests, all model usage)

### Checkpoint (If AI deleted your files then?)  
What happen if ai deleted your project or a file that you neede?
AI is not reliable that's why we use checkpoints

**Command For Creating Checkpoints in a project (initialization):**   
```npm i @google/gemini-cli -c```

After initializing project you can check your checkpoints:  
```/restore```

### GEMINI.md  
This File will contain all the instructions that gemini will see everytime, you can give syste prompt here

### How to add Custom Context in Gemini CLI:  
Create a folder in your current dir names ".gemini" and create a file in this dir named "settings.json".

Now in this json file write this:
{
    "context":{
        "fileName":["first_file.md", "GEMINI.md"]
    }
}

You will add files in this json if you want to feed anymore custom context other then "GEMINI.md"

### How to set a context hierarchy like what files to give LLM first:  
It would depend on how you give files in settings.json, first file will be shown first. Like in this case: "first_file.md" will be shown first to LLM.

The most important file should be written first in settings.json.

### Override Hierarchy Of Context:
The last file you wrote will override prev files if you give a same rule in multiple files, like if you say use French in file1 and say use Roman Urdu in file2, Gemini will use Roman Urdu. 

## ISSUES:
1- Can't run code from terminal

# CONTINUE FROM THIRD VIDEO: 13:48
# TRY TO CONNECT GITHUB MCP 