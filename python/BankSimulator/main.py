curr_balance = 0
def print_menu():
    print("Welcome to Simple Bank Simulator!")
    print("Your balance is: $" + str(curr_balance) + "\n")
    print("Choose an action:")
    print("1. Deposit")
    print("2. Withdraw")
    print("3. CHeck Balance")
    print("4. Quit")

def format_float(value):
    return "{:.2f}".format(value)

def is_valid_input(value):
    number = None
    try:
        number = float(value)
    except ValueError:
        print("Invalid input format.")
    return number

def get_choice():
    return input("Enter choice: ")

def deposit(amount):
    global curr_balance
    if amount <= 0:
        print("Negative input.")
    else:
        curr_balance += amount
        print("Deposited $" + str(format_float(amount)))

def withdraw(amount):
    global curr_balance
    if curr_balance - abs(amount) < 0:
        print("Insufficient funds.")
    else:
        curr_balance -= abs(amount)
        print("Withdrew $" + str(format_float(abs(amount))))

def check_balance():
    global curr_balance
    print("Your current balance is: $" + str(format_float(curr_balance)))

print_menu()
exit_bank = False
while not exit_bank:
    choice = get_choice()
    if choice.isdigit():
        choice = int(choice)
        if choice == 1:
            val = input("Enter amout to deposit: ")
            num = is_valid_input(val)
            if num is not None:
                deposit(num)
        elif choice == 2:
            val = input("Enter amout to withdraw: ")
            num = is_valid_input(val)
            if num is not None:
                withdraw(num)
        elif choice == 3:
            check_balance()
        elif choice == 4:
            print("Thanks for using the Bank Simulator")
            exit_bank = True
        else:
            print("Not a valid choice.")
    else:
        print("Invalid input.")