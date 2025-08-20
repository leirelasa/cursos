# List
todos = []
user_prompt = "> Enter TODOs:"
# print is used to print text into the console
print(user_prompt)

exit_todo = False
while not exit_todo:
    # Input returns a string by the user
    text = input()
    if text == "q":
        exit_todo = True
        print("> Bye!")
    else:
        # We can use len() to get the length of the string, characters
        if len(text) > 50:
            print("> Too many characters.")
        elif len(text) == 0:
            print("> Nothing entered.")
        else:
            # Add to the list using append
            todos.append(text)
            # Lists can be printed like this
            # print(todos)
            # But we can also loop
            print("> Your list of TODOs:")
            for i, todo in enumerate(todos):
                num = i+1
                print(num, todo)