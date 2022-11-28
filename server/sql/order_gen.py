import random
import datetime

customers = {
1  : ['James', 'James@name.email', '37273 some road realtown KS 69274'],
2  : ['Robert', 'Robert@name.email', '2010 Lincoln Way E Massillon OH 44646'],
3  : ['John', 'John@name.email', '114 Henderson St Chapel Hill NE 27514'],
4  : ['Michael', 'Michael@name.email', '12599 Grafton Rd Carleton MI 48117'],
5  : ['David', 'David@name.email', '2801 Interstate 20 Hudson Oaks TX 76087'],
6  : ['William', 'William@name.email', '17611 NE 70th St # 101 Redmond WA 98052'],
7  : ['Richard', 'Richard@name.email', '200 N 15th St # 8 Corsicana TX 75110'],
8  : ['Joseph', 'Joseph@name.email', '3200 Vegas Plaza Dr Las Vegas NC 89109'],
9  : ['Thomas', 'Thomas@name.email', '576 Ohio Ln Burr Ridge IN 60527'],
10 : ['Charles', 'Charles@name.email', '105 S Saginaw St Holly MI 48442'],
11 : ['Christopher', 'Christopher@name.email', '58080 Twentynine Palms Hwy Yucca Valley CA 92284'],
12 : ['Daniel', 'Daniel@name.email', '10433 SE Carr Rd #338 Renton WA 98055'],
13 : ['Matthew', 'Matthew@name.email', '750 Stanyan St San Francisco CA 94117'],
14 : ['Anthony', 'Anthony@name.email', '2724 W Deyoung St Marion IN 62959'],
15 : ['Mark', 'Mark@name.email', '11210 Hickory Trail Ln Charlotte NE 28277'],
16 : ['Donald', 'Donald@name.email', '710 S Main St Mt Vernon OH 43050'],
17 : ['Steven', 'Steven@name.email', '5408 Queens Chapel Rd Hyattsville MD 20782'],
18 : ['Paul', 'Paul@name.email', '806 S Main St Columbia TN 38401'],
19 : ['Andrew', 'Andrew@name.email', '2914 M St NW Washington DE 20007'],
20 : ['Joshua', 'Joshua@name.email', '121 Wakelon St Zebulon NE 27597'],
21 : ['Kenneth', 'Kenneth@name.email', '3015 Pittsburgh Mills Blvd Tarentum PA 15084'],
22 : ['Kevin', 'Kevin@name.email', '598 Madison Ave New York City ND 10022'],
23 : ['Brian', 'Brian@name.email', '107 Trosclair Ln Dulac LA 70353'],
24 : ['George', 'George@name.email', '2320 Frank St Eau Claire WV 54703'],
25 : ['Timothy', 'Timothy@name.email', '3907 Waring Rd Oceanside CA 92056'],
26 : ['Ronald', 'Ronald@name.email', '1195 65th St Emeryville CA 94608'],
27 : ['Edward', 'Edward@name.email', '382 3rd Ave New York ND 10016'],
28 : ['Jason', 'Jason@name.email', '1545 Belcher Rd S Clearwater FL 33764'],
29 : ['Jeffrey', 'Jeffrey@name.email', '3229 Old Goldie Rd Oak Harbor WA 98277'],
30 : ['Ryan', 'Ryan@name.email', '215 Annis Rd South Amherst OH 44001'],
31 : ['Jacob', 'Jacob@name.email', '4276 Harbour Beach Blvd Brigantine NM 08203'],
32 : ['Nicholas', 'Nicholas@name.email', '3614 S 31st St Temple TX 76502'],
33 : ['Eric', 'Eric@name.email', '7590 Chippewa Rd Cleveland OH 44141']
}

##added more chances for 'paid', 'shipped', or 'delivered' to be chosen
##instead of the less likely statuses
statuses = ['open', 'closed']


print("Starting random generation (orders)...")

file1 = open("order_gen_input.csv", "r")
lines = file1.readlines()
file1.close()

#detect how many orders were put in order_gen_input.csv
num_orders = len(lines) - 1

for i in range(0, len(lines)):

    #current line
    l = lines[i]

    #pick random customer ==> cus
    c_idx = random.randint(1,len(customers))
    cus = customers[c_idx]

    #pick random status ==> status
    s_idx = random.randint(0,len(statuses)-1)
    status = statuses[s_idx]

    #pick >>random_day<< between start_date and end_date
    #end_date must be after start date
    start_date = datetime.date(2018, 1, 1)
    end_date = datetime.date(2024, 12, 31)
    time_between = end_date - start_date
    days_between = time_between.days
    random_num_days = random.randint(0, days_between)
    random_day = start_date + datetime.timedelta(days=random_num_days)

    ##debug
    #print(cus)
    #print(status)
    #print(str(random_day))

    #replace tags in line with data
    l = l.replace('<n>', cus[0])
    l = l.replace('<e>', cus[1])
    l = l.replace('<a>', cus[2])
    l = l.replace('<t>', '1')
    l = l.replace('<w>', '1')
    l = l.replace('<s>', status)
    l = l.replace('<d>', str(random_day))
    ##debug
    #print(l)
    lines[i] = l #apply changed line to list

#debug
#print(lines)


file2 = open("orders.csv", "w")
file2.writelines(lines)
file2.close()

print("Finished successfuly. Check 'orders.csv'")




print("Starting random generation (order_product)...")

##Grab valid product ID numbers
file4 = open("inventory.csv", "r")
prods_raw = file4.readlines()
file4.close()

prod_ids = []
for i in range(0, len(prods_raw)):
    if (i==0):
        continue
    l = prods_raw[i]
    l = l.split("\"")
    id = l[1]
    #print(str(l))
    #print(str(id))
    prod_ids.append(str(id))

print(prod_ids)

#get template for order_product table file
file3 = open("order_product_gen_input.csv", "r")
input = file3.readlines()
file3.close()

#grab template line from input csv
l = input[1]
lines = []
lines.append(input[0])

#for each order
for i in range(1, num_orders+1):
    
    #determine how many products are purchased in each order
    choices = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 15, 25]
    c_idx = random.randrange(0, len(choices))
    n = choices[c_idx]

    print("generating ", str(n), " products for order ", str(i))
    
    order_itms = []

    #while need to add more items to that order
    while n > 0:
        #copy row template
        l_temp = l

        #pick random product ID
        prod_idx = random.randrange(0, len(prod_ids))
        prod_id = prod_ids[prod_idx]

        #pick another if already in order
        if (prod_id in order_itms):
            continue

        #mark item as added to order
        order_itms.append(prod_id)

        #determine how many of item was ordered
        qty = random.randint(1,10)
        
        #setup table row
        l_temp = l_temp.replace("<o>", str(i))
        l_temp = l_temp.replace("<p>", str(prod_id))
        l_temp = l_temp.replace("<q>", str(qty))
        
        #add to file list
        lines.append(l_temp)

        #mark an item added to order
        n -= 1

        ##debug
        print(l_temp)


file5 = open("order_product.csv", "w")
file5.writelines(lines)
file5.close

print("Finished successfuly. Check 'order_product.csv'")
    




