var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .    The power set of a set is the set of all subsets of .   Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function      Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   As with sets, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .     Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Tuples and Cartesian product  Next we introduce the notion of a tuple , which will both provide a rigorous foundation for the notion of an ordered sequence (or list), and vastly generalize that notion. Interestingly, as revealed in the next definition, a tuple is just a function by another name.   Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .     Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples       Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.    -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .     We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.    Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.   The last definition indicates how our notion of tuple generalizes that of a finite sequence. As the next example illustrates, infinite sequences can also be considered as simply a particular type of tuple: one with indexing set .   Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .     Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .    Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .      Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.        "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.6",
  "title": "",
  "body": " Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.10",
  "title": "Power set.",
  "body": " Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.12",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "ss_functions-3",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-3",
  "type": "Example",
  "number": "0.13",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "eg_addition_mult_as_functions",
  "level": "2",
  "url": "s_sets_functions.html#eg_addition_mult_as_functions",
  "type": "Example",
  "number": "0.14",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.15",
  "title": "",
  "body": " Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .  "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.16",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.17",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.18",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.19",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_functions-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-11",
  "type": "Example",
  "number": "0.20",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.21",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.22",
  "title": "Identity and inverse functions.",
  "body": " Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .   "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.23",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.24",
  "title": "Tuple.",
  "body": " Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .   "
},
{
  "id": "rm_tuple_function",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_function",
  "type": "Remark",
  "number": "0.25",
  "title": "Tuple versus function.",
  "body": " Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples     "
},
{
  "id": "ss_tuples_cart_prod-5",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-5",
  "type": "Remark",
  "number": "0.27",
  "title": "Tuple equality.",
  "body": " Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.  "
},
{
  "id": "d_ntuple",
  "level": "2",
  "url": "s_sets_functions.html#d_ntuple",
  "type": "Definition",
  "number": "0.28",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.29",
  "title": "",
  "body": " We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.  "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.30",
  "title": "",
  "body": " Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  "
},
{
  "id": "d_infinite_sequence",
  "level": "2",
  "url": "s_sets_functions.html#d_infinite_sequence",
  "type": "Definition",
  "number": "0.31",
  "title": "Infinite sequence.",
  "body": " Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .   "
},
{
  "id": "ss_tuples_cart_prod-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-11",
  "type": "Remark",
  "number": "0.32",
  "title": "Indexed collection of sets.",
  "body": " Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .  "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.33",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.34",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.      "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.35",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.36",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.37",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.38",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.39",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.40",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.41",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.42",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.43",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.44",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques   Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.    Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)   The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )     Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).   It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .     Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.      Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities  Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .   Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.    Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case 2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.45",
  "title": "",
  "body": " The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )  "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.46",
  "title": "",
  "body": " It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.  "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.47",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.48",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.49",
  "title": "",
  "body": " Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.  "
},
{
  "id": "sss_chain_equalities-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-3",
  "type": "Warning",
  "number": "0.50",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-2-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-4-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.51",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.  "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.52",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.53",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.54",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case 2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_groups",
  "level": "1",
  "url": "s_groups.html",
  "type": "Section",
  "number": "1.1",
  "title": "Groups",
  "body": " Groups   This first quarter of Math 331 is devoted entirely to the study of groups. This a fitting place to begin both as groups represent a type of algebraic object with near minimal structure and are omnipresent in the world of mathematics and the empirical sciences more generally. More conceptually, groups are intimately connected with the notion of symmetry in mathematics. Put plainly, wherever you find mathematical discussion of symmetry, a group usually lurks in the background as the thing that defines that symmetry. We will see plenty of examples of this in the coming days. In the meantime, for an excellent elaboration of this theme, check out Keith Conrad's blurb Why groups?     Definition   Groups   A group is an ordered pair where is a nonempty set and is a binary operation , satisfying the following axioms.   Associativity  For all we have .    Group identity  There is an element , such that for all , we have . We call the group identity of .    Group inverses  For all there is an element satisfying . We call the group inverse of .        Group law notation   You are free to denote the binary group law in any manner you like. Often, as in , we will make a notational choice that reflects the specific nature of a given group.  Furthermore, with the exception of the case where is used to denote the group law, we will often omit the group operation symbol when writing expressions involving group elements.     Ring additive groups   Let , and let be the usual addition operation on . The pair is a group, called the additive group of .  The group identity of is , also known as the additive identity of .  Given any , its group inverse is its minus, , also known as the additive inverse  .     Ring multiplicative groups   Let . An element is a unit (or (multiplicatively) invertible if there is an element satisfying . In this case is called the multiplicative inverse of . Define to be the set of all units of : , . If , then , since in these number systems all nonzero elements have a multiplicative inverse. By contrast, we have , since and are the only integers that have an integer multiplicative inverse.  The , where is the usual multiplciation operation on , is a group called the multiplicative group of .  The group identity of is , also known as the multiplicative identity of .  Given any , its group inverse is the multiplicative inverse defined above.     Abelian group   A group is abelian (or commutative ) if for all . The group is nonabelian (or noncommutative ), if it is not abelian.     General linear group  Let . The set of all matrices with coefficients in is denoted . We denote by the set of invertible matrices with coefficients in : , is denoted : , . The pair , where is the usual matrix multiplication operation, is a group called the general linear group of degree over .  The group identity of is the identity matrix .  Given any , its group inverse is the matrix inverse .    is nonabelian   Let and let . Prove that is a nonabelian group.    Let . We have (easy determinant computation), and furthermore . Since , we conclude that is nonabelian.  Next, given any , consider the block matrices , where and are the matrices above. From properties of block matrix arithmetic it follows that and are invertible (in fact, ) and . Since , we conclude that is nonabelian, as desired.      Product groups  The group product operation is an easy and important manner of constructing new groups from a collection of existing ones.   Product group    product of groups and     product of family of groups    Given groups and , the product group  is the group with underlying set and group operation . More generally, given a family of groups indexed by a nonempty set , their product is the group with underling set and group operation for all and in .  We write for the -fold group product of a group with itself.     Arbitrary products  See for more details about tuples and Cartesian products indexed by arbitrary sets .    Product group   Given a family of groups indexed by a nonempty set , the product is a group with respect to the binary operation defined in .    We verify each group axiom in turn.   Given elements , , and of , we have .    Let denote the identity element of for each , and let . For any , we have and , showing that satisfies the group identity axiom.    Given , let . We have and , showing that is a group inverse of .         Elementary properties   Group properties   Let be a group.   Cancellation laws  Let .    if and only if .     if and only if .       Uniqueness of identity  The identity element of is unique: , there is exactly one element satisfying .    Uniqueness of inverse  Every has a unique inverse element: , for each there is exactly one element satisfying .     for all .    Inverse of product   for all .    Generalized associativity  Any two parenthetical groupings of an -tuple give rise to the same product in , which we denote as . For example, we have for any , and we denote this common element .            Group exponentiation   Let be a group. Given and , the -th power of , denoted is defined via cases as follows.        Given positive integer , we define .        Group element order   Let be an element of the group . The order of , denoted is defined as follows.   If there is no positive integer , such that , then has infinite order , denoted .    If there is a positive integer such that , then is defined as the smallest positive integer satisfying .        Order of inverse   Let be an element of the group . Prove: .     Element of infinite order   Assume is an element of the group of infinite order. Prove that the elements , , are all distinct.     "
},
{
  "id": "d_group",
  "level": "2",
  "url": "s_groups.html#d_group",
  "type": "Definition",
  "number": "1.1",
  "title": "Groups.",
  "body": " Groups   A group is an ordered pair where is a nonempty set and is a binary operation , satisfying the following axioms.   Associativity  For all we have .    Group identity  There is an element , such that for all , we have . We call the group identity of .    Group inverses  For all there is an element satisfying . We call the group inverse of .      "
},
{
  "id": "fiat_group_law",
  "level": "2",
  "url": "s_groups.html#fiat_group_law",
  "type": "Fiat",
  "number": "1.2",
  "title": "Group law notation.",
  "body": " Group law notation   You are free to denote the binary group law in any manner you like. Often, as in , we will make a notational choice that reflects the specific nature of a given group.  Furthermore, with the exception of the case where is used to denote the group law, we will often omit the group operation symbol when writing expressions involving group elements.   "
},
{
  "id": "spec_ring_additive_groups",
  "level": "2",
  "url": "s_groups.html#spec_ring_additive_groups",
  "type": "Specimen",
  "number": "1",
  "title": "Ring additive groups.",
  "body": " Ring additive groups   Let , and let be the usual addition operation on . The pair is a group, called the additive group of .  The group identity of is , also known as the additive identity of .  Given any , its group inverse is its minus, , also known as the additive inverse  .   "
},
{
  "id": "spec_ring_mult_groups",
  "level": "2",
  "url": "s_groups.html#spec_ring_mult_groups",
  "type": "Specimen",
  "number": "2",
  "title": "Ring multiplicative groups.",
  "body": " Ring multiplicative groups   Let . An element is a unit (or (multiplicatively) invertible if there is an element satisfying . In this case is called the multiplicative inverse of . Define to be the set of all units of : , . If , then , since in these number systems all nonzero elements have a multiplicative inverse. By contrast, we have , since and are the only integers that have an integer multiplicative inverse.  The , where is the usual multiplciation operation on , is a group called the multiplicative group of .  The group identity of is , also known as the multiplicative identity of .  Given any , its group inverse is the multiplicative inverse defined above.   "
},
{
  "id": "d_abelian_group",
  "level": "2",
  "url": "s_groups.html#d_abelian_group",
  "type": "Definition",
  "number": "1.3",
  "title": "Abelian group.",
  "body": " Abelian group   A group is abelian (or commutative ) if for all . The group is nonabelian (or noncommutative ), if it is not abelian.   "
},
{
  "id": "spec_gln",
  "level": "2",
  "url": "s_groups.html#spec_gln",
  "type": "Specimen",
  "number": "3",
  "title": "General linear group.",
  "body": " General linear group  Let . The set of all matrices with coefficients in is denoted . We denote by the set of invertible matrices with coefficients in : , is denoted : , . The pair , where is the usual matrix multiplication operation, is a group called the general linear group of degree over .  The group identity of is the identity matrix .  Given any , its group inverse is the matrix inverse .  "
},
{
  "id": "eg_nonabelian_gln",
  "level": "2",
  "url": "s_groups.html#eg_nonabelian_gln",
  "type": "Example",
  "number": "1.4",
  "title": "<span class=\"process-math\">\\(\\GL_n(R)\\)<\/span> is nonabelian.",
  "body": " is nonabelian   Let and let . Prove that is a nonabelian group.    Let . We have (easy determinant computation), and furthermore . Since , we conclude that is nonabelian.  Next, given any , consider the block matrices , where and are the matrices above. From properties of block matrix arithmetic it follows that and are invertible (in fact, ) and . Since , we conclude that is nonabelian, as desired.   "
},
{
  "id": "d_product_group",
  "level": "2",
  "url": "s_groups.html#d_product_group",
  "type": "Definition",
  "number": "1.5",
  "title": "Product group.",
  "body": " Product group    product of groups and     product of family of groups    Given groups and , the product group  is the group with underlying set and group operation . More generally, given a family of groups indexed by a nonempty set , their product is the group with underling set and group operation for all and in .  We write for the -fold group product of a group with itself.   "
},
{
  "id": "ss_product_groups-4",
  "level": "2",
  "url": "s_groups.html#ss_product_groups-4",
  "type": "Remark",
  "number": "1.6",
  "title": "Arbitrary products.",
  "body": " Arbitrary products  See for more details about tuples and Cartesian products indexed by arbitrary sets .  "
},
{
  "id": "prop_product_group",
  "level": "2",
  "url": "s_groups.html#prop_product_group",
  "type": "Proposition",
  "number": "1.7",
  "title": "Product group.",
  "body": " Product group   Given a family of groups indexed by a nonempty set , the product is a group with respect to the binary operation defined in .    We verify each group axiom in turn.   Given elements , , and of , we have .    Let denote the identity element of for each , and let . For any , we have and , showing that satisfies the group identity axiom.    Given , let . We have and , showing that is a group inverse of .      "
},
{
  "id": "th_group_props",
  "level": "2",
  "url": "s_groups.html#th_group_props",
  "type": "Proposition",
  "number": "1.8",
  "title": "Group properties.",
  "body": " Group properties   Let be a group.   Cancellation laws  Let .    if and only if .     if and only if .       Uniqueness of identity  The identity element of is unique: , there is exactly one element satisfying .    Uniqueness of inverse  Every has a unique inverse element: , for each there is exactly one element satisfying .     for all .    Inverse of product   for all .    Generalized associativity  Any two parenthetical groupings of an -tuple give rise to the same product in , which we denote as . For example, we have for any , and we denote this common element .          "
},
{
  "id": "d_group_exp",
  "level": "2",
  "url": "s_groups.html#d_group_exp",
  "type": "Definition",
  "number": "1.9",
  "title": "Group exponentiation.",
  "body": " Group exponentiation   Let be a group. Given and , the -th power of , denoted is defined via cases as follows.        Given positive integer , we define .      "
},
{
  "id": "d_order_group_element",
  "level": "2",
  "url": "s_groups.html#d_order_group_element",
  "type": "Definition",
  "number": "1.10",
  "title": "Group element order.",
  "body": " Group element order   Let be an element of the group . The order of , denoted is defined as follows.   If there is no positive integer , such that , then has infinite order , denoted .    If there is a positive integer such that , then is defined as the smallest positive integer satisfying .      "
},
{
  "id": "eg_order_inverse",
  "level": "2",
  "url": "s_groups.html#eg_order_inverse",
  "type": "Example",
  "number": "1.11",
  "title": "Order of inverse.",
  "body": " Order of inverse   Let be an element of the group . Prove: .   "
},
{
  "id": "eg_infinite_order",
  "level": "2",
  "url": "s_groups.html#eg_infinite_order",
  "type": "Example",
  "number": "1.12",
  "title": "Element of infinite order.",
  "body": " Element of infinite order   Assume is an element of the group of infinite order. Prove that the elements , , are all distinct.   "
},
{
  "id": "s_mod_rings",
  "level": "1",
  "url": "s_mod_rings.html",
  "type": "Section",
  "number": "1.2",
  "title": "Modular arithmetic",
  "body": " Modular arithmetic   Congruence   Divisibilty    divides    Given integers we say that  divides  (or that is a multiple of ) if there is an integer satisfying . In this case, is called the quotient of by .     Congruence modulo    is congruent to modulo     the congruence class of modulo    Let be a positive integer. Integers and are congruent modulo , denoted , if one of the two following equivalent conditions holds: . The congruence class (or residue class ) of modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .     Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .        Congruence classes  Fix an integer . The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.    Congruence   Fix a modulus .   The congruence modulo relation is an equivalence relation: ,   Reflexivity   for all .    Reflexivity  If , then .    Transitivity  If and , then .       The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of : , we have , and if , then . Using logical notation: .    Assume is positive. For every , there is a unique such that . Equivalently, and for all . As a consequence, .       See text for (1). Statements (2)-(3) then follow from general properties about equivalence relations and their corresponding equivalence classes. Statement (4) follows from (2) and the following observation: .     Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .     Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .    Division algorithm   Given any integer with nonzero, there is a unique pair of integers satisfying the following properties:    ;     .   We call the integers and satisfying these properties the quotient and remainder upon dividing by .     Least residue   Let be a positive integer, and let . The following statements are equivalent.    .     and .     is the remainder upon division of by .         Ring structure of   Modular arithmetic   Fix a modulus . Assume integers satisfy . We have . It follows from this that .     Ring structure of   Fix a modulus . We have well-defined binary operations and defined on as follows: .     Modular arithmetic   Fix the modulus . Find a representative for the congruence class .         Least residue   Let and let . Compute .         Additive group   Fix a positive integer . The pair is a group, where is the addition operation defined in .  The group identity of is the congruence class .  Given , its group inverse is , denoted .     Multiplicative units in   Fix a modulus . An element is a unit (or (multiplicatively) invertible ) if there is an element satisfying . The element in this case is called the multiplicative inverse of , denoted . The set of all units of is denoted : , .     Units modulo   Fix a modulus . The pair is a group, where is the operation defined in .  The group identity of is .  Given , its group inverse is its multiplicative inverse .     Modulus   Compute group tables for both and . Naturally, for the latter you should first determine the units of .         Units modulo   Compute a group table for .         Greatest common divisor   Let and be integers, at least one of which is nonzero. The greatest common divisor of and , denoted , is the greatest positive integer dividing both and : , .     Units mod  As we will see later, it turns out that an element is a unit if and only if is relatively prime to : , if and only if . As a result of this very much non-obvious fact, we have .    "
},
{
  "id": "d_divis",
  "level": "2",
  "url": "s_mod_rings.html#d_divis",
  "type": "Definition",
  "number": "1.13",
  "title": "Divisibilty.",
  "body": " Divisibilty    divides    Given integers we say that  divides  (or that is a multiple of ) if there is an integer satisfying . In this case, is called the quotient of by .   "
},
{
  "id": "d_cong_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#d_cong_mod_n",
  "type": "Definition",
  "number": "1.14",
  "title": "Congruence modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Congruence modulo    is congruent to modulo     the congruence class of modulo    Let be a positive integer. Integers and are congruent modulo , denoted , if one of the two following equivalent conditions holds: . The congruence class (or residue class ) of modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .   "
},
{
  "id": "eg_cong_mod_3",
  "level": "2",
  "url": "s_mod_rings.html#eg_cong_mod_3",
  "type": "Example",
  "number": "1.15",
  "title": "Congruence modulo <span class=\"process-math\">\\(3\\)<\/span>.",
  "body": " Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .      "
},
{
  "id": "ss_cong-5",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-5",
  "type": "Remark",
  "number": "1.16",
  "title": "Congruence classes.",
  "body": " Congruence classes  Fix an integer . The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.  "
},
{
  "id": "th_cong_class",
  "level": "2",
  "url": "s_mod_rings.html#th_cong_class",
  "type": "Theorem",
  "number": "1.17",
  "title": "Congruence.",
  "body": " Congruence   Fix a modulus .   The congruence modulo relation is an equivalence relation: ,   Reflexivity   for all .    Reflexivity  If , then .    Transitivity  If and , then .       The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of : , we have , and if , then . Using logical notation: .    Assume is positive. For every , there is a unique such that . Equivalently, and for all . As a consequence, .       See text for (1). Statements (2)-(3) then follow from general properties about equivalence relations and their corresponding equivalence classes. Statement (4) follows from (2) and the following observation: .   "
},
{
  "id": "d_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#d_least_residue",
  "type": "Definition",
  "number": "1.18",
  "title": "Least residue modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .   "
},
{
  "id": "ss_cong-8",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-8",
  "type": "Warning",
  "number": "1.19",
  "title": "Congruence relation and least residues.",
  "body": " Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .  "
},
{
  "id": "th_div_alg",
  "level": "2",
  "url": "s_mod_rings.html#th_div_alg",
  "type": "Theorem",
  "number": "1.20",
  "title": "Division algorithm.",
  "body": " Division algorithm   Given any integer with nonzero, there is a unique pair of integers satisfying the following properties:    ;     .   We call the integers and satisfying these properties the quotient and remainder upon dividing by .   "
},
{
  "id": "prop_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#prop_least_residue",
  "type": "Proposition",
  "number": "1.21",
  "title": "Least residue.",
  "body": " Least residue   Let be a positive integer, and let . The following statements are equivalent.    .     and .     is the remainder upon division of by .      "
},
{
  "id": "prop_cong_arith",
  "level": "2",
  "url": "s_mod_rings.html#prop_cong_arith",
  "type": "Proposition",
  "number": "1.22",
  "title": "Modular arithmetic.",
  "body": " Modular arithmetic   Fix a modulus . Assume integers satisfy . We have . It follows from this that .   "
},
{
  "id": "cor_mod_ring_ops",
  "level": "2",
  "url": "s_mod_rings.html#cor_mod_ring_ops",
  "type": "Corollary",
  "number": "1.23",
  "title": "Ring structure of <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Ring structure of   Fix a modulus . We have well-defined binary operations and defined on as follows: .   "
},
{
  "id": "eg_mod_arith",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_arith",
  "type": "Example",
  "number": "1.24",
  "title": "Modular arithmetic.",
  "body": " Modular arithmetic   Fix the modulus . Find a representative for the congruence class .       "
},
{
  "id": "eg_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#eg_least_residue",
  "type": "Example",
  "number": "1.25",
  "title": "Least residue.",
  "body": " Least residue   Let and let . Compute .       "
},
{
  "id": "spec_Z_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#spec_Z_mod_n",
  "type": "Specimen",
  "number": "4",
  "title": "Additive group <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Additive group   Fix a positive integer . The pair is a group, where is the addition operation defined in .  The group identity of is the congruence class .  Given , its group inverse is , denoted .   "
},
{
  "id": "d_mult_inv_elements",
  "level": "2",
  "url": "s_mod_rings.html#d_mult_inv_elements",
  "type": "Definition",
  "number": "1.26",
  "title": "Multiplicative units in <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Multiplicative units in   Fix a modulus . An element is a unit (or (multiplicatively) invertible ) if there is an element satisfying . The element in this case is called the multiplicative inverse of , denoted . The set of all units of is denoted : , .   "
},
{
  "id": "spec_units_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#spec_units_mod_n",
  "type": "Specimen",
  "number": "5",
  "title": "Units modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Units modulo   Fix a modulus . The pair is a group, where is the operation defined in .  The group identity of is .  Given , its group inverse is its multiplicative inverse .   "
},
{
  "id": "eg_mod_groups",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_groups",
  "type": "Example",
  "number": "1.27",
  "title": "Modulus <span class=\"process-math\">\\(n=5\\)<\/span>.",
  "body": " Modulus   Compute group tables for both and . Naturally, for the latter you should first determine the units of .       "
},
{
  "id": "eg_mod_units",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_units",
  "type": "Example",
  "number": "1.28",
  "title": "Units modulo <span class=\"process-math\">\\(9\\)<\/span>.",
  "body": " Units modulo   Compute a group table for .       "
},
{
  "id": "d_gcd",
  "level": "2",
  "url": "s_mod_rings.html#d_gcd",
  "type": "Definition",
  "number": "1.29",
  "title": "Greatest common divisor.",
  "body": " Greatest common divisor   Let and be integers, at least one of which is nonzero. The greatest common divisor of and , denoted , is the greatest positive integer dividing both and : , .   "
},
{
  "id": "ss_cong_ring_structure-12",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong_ring_structure-12",
  "type": "Remark",
  "number": "1.30",
  "title": "Units mod <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Units mod  As we will see later, it turns out that an element is a unit if and only if is relatively prime to : , if and only if . As a result of this very much non-obvious fact, we have .  "
},
{
  "id": "s_matrix_grps",
  "level": "1",
  "url": "s_matrix_grps.html",
  "type": "Section",
  "number": "1.3",
  "title": "Matrix groups",
  "body": " Matrix groups   Invertible matix   Assume either that or that for some . Fix a positive integer . The set of all matrices with coefficients in is denoted .  Given matrices we define their product to be the matrix , where for all .  A matrix is invertible if there is a matrix such that , where is the identity matrix.  We denote by the set of all invertible matrices with coefficients in : , .     General linear group (generalized)   Assume either that or that for some . Given a positive integer , the pair is a group, where is matrix multiplication in .     Invertible matrices and determinant  It turns out that matrix algebra in proceeds essentialy exactly as you are accustomed to, no matter how exotic our ring is. In particular, we can define a determinant function using the usual formula, since has notions of addition and multiplication. Furthermore, you can show that as usual satisfies for all , and that for all there is a special matrix called the adjoint matrix of that satisfies . From these observations it follows that , where is the group of units of , as defined in and .  Of course, that these properties of the determinant and adjoint matrix hold very much requires a proof. We will not do that here, as these will not play a fundamental role in the current course beyond making computation within these groups more convenient. However, the ring theory developed in Math 331-2 will provide a powerful general method that allows us to conclude that properties enjoyed by mathematical objects defined over  and are sometimes inherited by the same types of objects defined over a more general .      Consider the group .   Compute by explicitly enumerating all of its elements. You can use and to denote the congruence classes .    Compute for all .    Find such that .    For your choice of above, express as as in .    Use the above to construct a full multiplication table of in terms of and .       Since , we see that to be invertible, we need . This restriction allows us to easily enumerate the invertible matrices as . The matrices named and above satisfy . Thus . Furthermore, we see that . The three relations then easily allow us to compute with the group law: that is as long as we express elements of the group in the form . For example, we have . Computations like this allow us to easily compute orders of elements: . We leave it to you to compute the entire multiplication table of . A good exercise!    "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_matrix_grps.html#d_invertible_matrix",
  "type": "Definition",
  "number": "1.31",
  "title": "Invertible matix.",
  "body": " Invertible matix   Assume either that or that for some . Fix a positive integer . The set of all matrices with coefficients in is denoted .  Given matrices we define their product to be the matrix , where for all .  A matrix is invertible if there is a matrix such that , where is the identity matrix.  We denote by the set of all invertible matrices with coefficients in : , .   "
},
{
  "id": "spec_matrix_grps_gen",
  "level": "2",
  "url": "s_matrix_grps.html#spec_matrix_grps_gen",
  "type": "Specimen",
  "number": "6",
  "title": "General linear group (generalized).",
  "body": " General linear group (generalized)   Assume either that or that for some . Given a positive integer , the pair is a group, where is matrix multiplication in .   "
},
{
  "id": "s_matrix_grps-4",
  "level": "2",
  "url": "s_matrix_grps.html#s_matrix_grps-4",
  "type": "Remark",
  "number": "1.32",
  "title": "Invertible matrices and determinant.",
  "body": " Invertible matrices and determinant  It turns out that matrix algebra in proceeds essentialy exactly as you are accustomed to, no matter how exotic our ring is. In particular, we can define a determinant function using the usual formula, since has notions of addition and multiplication. Furthermore, you can show that as usual satisfies for all , and that for all there is a special matrix called the adjoint matrix of that satisfies . From these observations it follows that , where is the group of units of , as defined in and .  Of course, that these properties of the determinant and adjoint matrix hold very much requires a proof. We will not do that here, as these will not play a fundamental role in the current course beyond making computation within these groups more convenient. However, the ring theory developed in Math 331-2 will provide a powerful general method that allows us to conclude that properties enjoyed by mathematical objects defined over  and are sometimes inherited by the same types of objects defined over a more general .  "
},
{
  "id": "eg_GL_mod2",
  "level": "2",
  "url": "s_matrix_grps.html#eg_GL_mod2",
  "type": "Example",
  "number": "1.33",
  "title": "<span class=\"process-math\">\\(\\GL_2(\\Z\/2\\Z)\\)<\/span>.",
  "body": "   Consider the group .   Compute by explicitly enumerating all of its elements. You can use and to denote the congruence classes .    Compute for all .    Find such that .    For your choice of above, express as as in .    Use the above to construct a full multiplication table of in terms of and .       Since , we see that to be invertible, we need . This restriction allows us to easily enumerate the invertible matrices as . The matrices named and above satisfy . Thus . Furthermore, we see that . The three relations then easily allow us to compute with the group law: that is as long as we express elements of the group in the form . For example, we have . Computations like this allow us to easily compute orders of elements: . We leave it to you to compute the entire multiplication table of . A good exercise!   "
},
{
  "id": "s_dihedral",
  "level": "1",
  "url": "s_dihedral.html",
  "type": "Section",
  "number": "1.4",
  "title": "Dihedral groups",
  "body": " Dihedral groups   Isometries of   Isometry    isometries of    Fix a positive integer . Let denote the standard Euclidean distance on : , , for all -tuples and . An isometry (or rigid motion ) of with respect to is a function satisfying for all . We denote by the set of all isometries of .     Group of isometries   Fix a positive integer . The pair is a group, where is function composition.     Isometries   Fix a positive integer . Investigate the claim that is a group with respect to composition. In more detail:   Explain why the group operation is well defined.    What is the group identity of this group, and what are the group inverses?    There is a nontrivial detail in the last part that requires proof. What is it?            Rigid motions of  Rotations about a point, reflections through a line, and translation by a fixed vector are easily seen to be examples of rigid motions of the plane. Furthermore, it can be shown that a rigid motion that maps the origin to itself is a linear transformation, that itself is either rotation about or reflection through a line passing through . It follows from this that any rigid motion has a formula of the form , where is a rotation or reflection matrix, and is a fixed vector in .     Dihedral groups   Dihedral groups    the dihedral group of cardinality    Fix an integer . Let be the regular -gon centered at the origin with one vertex at . We define to be the set of rigid motions of that map onto itself: , . Function composition defines a binary operation . The pair is a group, called the dihedral group of cardinality .  The group identity of is the identity function . Given an element , its group inverse is its function inverse .     or  What we call the book calls ! This is somewhat unfortunate, but it turns out there is no real consensus in the mathematical community as to which is the preferred notation. As we see below, the subscript has the advantage of indicating the cardinality of the group in question. On the other hand, the subscript reminds us that the group is defined in terms of isometries that fix an -gon. The latter is consistent with our notation for permutation groups (to be introduced soon), which are defined as the group of permutations acting on a set of elements. That fact, along with the fact that I was simply raised on and not has persuaded me to part ways with the text in this case.    Dihedral group   Fix an integer , let be the regular -gon centered at the origin with one vertex at , and let be the corresponding dihedral group.  Furthermore, define to be rotation by about the origin, and define to be reflection across the -axis.   We have and .    The elements and satisfy .    More generally, we have .            Computing in   Fix . Visualize the elements of as follows.   Draw the equilateral triangle as described in .    For each element , where and are defined as in , give an explicit geometric description of this rigid motion.    Compute a group table for .            Dihedral geometry   Fix an integer , and let be as defined in .   Give a precise geometric description of each rigid motion .    Let for any . Prove that and that satisfies . In other words, in the description of given in , we can replace the reflection with any of the reflections .             Group presentations  As we saw above, the relations together with the fact that are essentially all we need to know to be able to do computations in the dihedral group . Group presentation notation gives us a nice way of summarizing this defining properties. A group presentation of is . Although we introduce the notation here as a convenient way to summarize how an established group, namely , is generated by the elements and , the notation can also be used to construct groups from scratch. Put another way, any presentation like the one above can be shown to be the presentation of an actual existing group. For example, the presentation can be shown to be the define a certain group of cardinality . As it turns out, to make good sense of this construction, a significant amount of theory must be mobilized. As such, we will be careful to confine ourselves to using the presentation notation only to as a summary description of a group we know already to exist. The quaternion group below is a good example of this.   Quaternion group    the quaternion group    Let . The following rules define a binary operation on . . The pair is a group called the quaternion group . We have the following presentation of : .     "
},
{
  "id": "d_isom",
  "level": "2",
  "url": "s_dihedral.html#d_isom",
  "type": "Definition",
  "number": "1.34",
  "title": "Isometry.",
  "body": " Isometry    isometries of    Fix a positive integer . Let denote the standard Euclidean distance on : , , for all -tuples and . An isometry (or rigid motion ) of with respect to is a function satisfying for all . We denote by the set of all isometries of .   "
},
{
  "id": "spec_isom",
  "level": "2",
  "url": "s_dihedral.html#spec_isom",
  "type": "Specimen",
  "number": "7",
  "title": "Group of isometries.",
  "body": " Group of isometries   Fix a positive integer . The pair is a group, where is function composition.   "
},
{
  "id": "eg_isometries",
  "level": "2",
  "url": "s_dihedral.html#eg_isometries",
  "type": "Example",
  "number": "1.35",
  "title": "Isometries.",
  "body": " Isometries   Fix a positive integer . Investigate the claim that is a group with respect to composition. In more detail:   Explain why the group operation is well defined.    What is the group identity of this group, and what are the group inverses?    There is a nontrivial detail in the last part that requires proof. What is it?          "
},
{
  "id": "ss_isometries-5",
  "level": "2",
  "url": "s_dihedral.html#ss_isometries-5",
  "type": "Remark",
  "number": "1.36",
  "title": "Rigid motions of <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Rigid motions of  Rotations about a point, reflections through a line, and translation by a fixed vector are easily seen to be examples of rigid motions of the plane. Furthermore, it can be shown that a rigid motion that maps the origin to itself is a linear transformation, that itself is either rotation about or reflection through a line passing through . It follows from this that any rigid motion has a formula of the form , where is a rotation or reflection matrix, and is a fixed vector in .  "
},
{
  "id": "spec_dihedral",
  "level": "2",
  "url": "s_dihedral.html#spec_dihedral",
  "type": "Specimen",
  "number": "8",
  "title": "Dihedral groups.",
  "body": " Dihedral groups    the dihedral group of cardinality    Fix an integer . Let be the regular -gon centered at the origin with one vertex at . We define to be the set of rigid motions of that map onto itself: , . Function composition defines a binary operation . The pair is a group, called the dihedral group of cardinality .  The group identity of is the identity function . Given an element , its group inverse is its function inverse .   "
},
{
  "id": "ss_dihedral-3",
  "level": "2",
  "url": "s_dihedral.html#ss_dihedral-3",
  "type": "Warning",
  "number": "1.37",
  "title": "<span class=\"process-math\">\\(D_n\\)<\/span> or <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": " or  What we call the book calls ! This is somewhat unfortunate, but it turns out there is no real consensus in the mathematical community as to which is the preferred notation. As we see below, the subscript has the advantage of indicating the cardinality of the group in question. On the other hand, the subscript reminds us that the group is defined in terms of isometries that fix an -gon. The latter is consistent with our notation for permutation groups (to be introduced soon), which are defined as the group of permutations acting on a set of elements. That fact, along with the fact that I was simply raised on and not has persuaded me to part ways with the text in this case.  "
},
{
  "id": "th_dihedral",
  "level": "2",
  "url": "s_dihedral.html#th_dihedral",
  "type": "Theorem",
  "number": "1.38",
  "title": "Dihedral group.",
  "body": " Dihedral group   Fix an integer , let be the regular -gon centered at the origin with one vertex at , and let be the corresponding dihedral group.  Furthermore, define to be rotation by about the origin, and define to be reflection across the -axis.   We have and .    The elements and satisfy .    More generally, we have .          "
},
{
  "id": "eg_D3",
  "level": "2",
  "url": "s_dihedral.html#eg_D3",
  "type": "Example",
  "number": "1.39",
  "title": "Computing in <span class=\"process-math\">\\(D_3\\)<\/span>.",
  "body": " Computing in   Fix . Visualize the elements of as follows.   Draw the equilateral triangle as described in .    For each element , where and are defined as in , give an explicit geometric description of this rigid motion.    Compute a group table for .          "
},
{
  "id": "eg_dihedral_geom",
  "level": "2",
  "url": "s_dihedral.html#eg_dihedral_geom",
  "type": "Example",
  "number": "1.40",
  "title": "Dihedral geometry.",
  "body": " Dihedral geometry   Fix an integer , and let be as defined in .   Give a precise geometric description of each rigid motion .    Let for any . Prove that and that satisfies . In other words, in the description of given in , we can replace the reflection with any of the reflections .          "
},
{
  "id": "spec_quaternion",
  "level": "2",
  "url": "s_dihedral.html#spec_quaternion",
  "type": "Specimen",
  "number": "9",
  "title": "Quaternion group.",
  "body": " Quaternion group    the quaternion group    Let . The following rules define a binary operation on . . The pair is a group called the quaternion group . We have the following presentation of : .   "
},
{
  "id": "s_permutations",
  "level": "1",
  "url": "s_permutations.html",
  "type": "Section",
  "number": "1.5",
  "title": "Permutations",
  "body": " Permutations   Permutations    permutations of the set    Let be a nonempty set. A permutation of is a bijective function . We denote by the set of all permutations of : , . If for some positive integer , we will write for .     Permutation group   Let be a nonempty set. The pair , where is function composition, is a group called the permutation group of .  The group identity of is the identity function defined as for all . Given a permutation , its group inverse is the inverse function .  If is finite of cardinality , then a standard counting argument shows that .     Table notation  Let , where the are distinct. Given a permutation satisfying for all , we represent using table notation as     Permutations: table notation   Write down all elements of using table notation.    Although table notation gives a clear and direct representation of a permutation, it is a bit cumbersome notationally, especially when we begin to compute compositions of multiple permutations. Cycle notation , described below, is a sleeker more computationally friendly manner of notating permutations.   Cycles   Let be a -tuple of distinct elements of the set . The permutation defined as is called the k-cycle of associated to the tuple , and is denoted . Two cycles are disjoint if .     Cycle arithmetic   Let and be cycles of the set .   For all , we have .     .         If and are disjoint, then : , disjoint cycles commute.    If , where the are pairwise disjoint cycles, then the order of is the least common multiple of the orders of the : , .       Left as a homework exercise.     Cycle decomposition   Let be a finite set, and let .   We can write where the are pairwise disjoint cycles.    If we assume that the union of the set of elements appearing in the cycles is all of , then the set of disjoint cycles appearing in the decomposition is uniquely determined by .       The following is an outline for proving this theorem. Fix .   Step 1  Prove that the relation is an equivalence relation on     Step 2  Let be the equivalence classes defined by the relation above. Prove that for each and each , we have , where and .    Step 3  For each , pick such that , and let be the cycle . Show that .    Step 4 (uniqueness)  Assume be a decomposition of into disjoint cycles , and that the union of elements appearing in the is . For each , let be the set of elements of appearing in the cycle .   Prove that .    Prove that and that after a reordering, we have for all .    Prove that .         Uniqueness of cycle decomposition  Let's make a few important remarks about the uniqueness of cycle decomposition.   First off, to have any uniqueness property whatsoever, the cycle decomposition must be a disjoint one. Indeed, for all -cycles we have , giving us many different ways of writing as a composition of 2-cycles.    Although the cycles appearing in a disjoint cycle decomposition are unique, the order in which they appear in this expression is not unique. Indeed, since disjoint cycles commute, we can order the on the right side of the equation any way we like!    Furthermore, remember that any given cycle can itself be expressed in many (in fact ) different ways.       Cycle decomposition   We work in the group . Let .   Compute disjoint cycle decompositions of the following permutations.                          Compute .    True or false: .           Although the previous examples should make clear how to decompose an arbitrary permutation into disjoint cycles, we record here a more official description of this procedure.    Let be a finite set, and let . To compute a decomposition of into disjoint cycles, proceed as follows.   Initialize: set , the empty product of cycles.    If all elements of appear in the cycles appearing in , then stop.  Otherwise, pick any that does not appear in and compute the cycle it generates by evaluating at successive powers until you get an output of .  Update: set and repeat Step 2.       "
},
{
  "id": "d_permutation",
  "level": "2",
  "url": "s_permutations.html#d_permutation",
  "type": "Definition",
  "number": "1.41",
  "title": "Permutations.",
  "body": " Permutations    permutations of the set    Let be a nonempty set. A permutation of is a bijective function . We denote by the set of all permutations of : , . If for some positive integer , we will write for .   "
},
{
  "id": "spec_permutation",
  "level": "2",
  "url": "s_permutations.html#spec_permutation",
  "type": "Specimen",
  "number": "10",
  "title": "Permutation group.",
  "body": " Permutation group   Let be a nonempty set. The pair , where is function composition, is a group called the permutation group of .  The group identity of is the identity function defined as for all . Given a permutation , its group inverse is the inverse function .  If is finite of cardinality , then a standard counting argument shows that .   "
},
{
  "id": "s_permutations-4",
  "level": "2",
  "url": "s_permutations.html#s_permutations-4",
  "type": "Notation",
  "number": "1.42",
  "title": "Table notation.",
  "body": " Table notation  Let , where the are distinct. Given a permutation satisfying for all , we represent using table notation as   "
},
{
  "id": "eg_S_3",
  "level": "2",
  "url": "s_permutations.html#eg_S_3",
  "type": "Example",
  "number": "1.43",
  "title": "Permutations: table notation.",
  "body": " Permutations: table notation   Write down all elements of using table notation.   "
},
{
  "id": "d_cycle",
  "level": "2",
  "url": "s_permutations.html#d_cycle",
  "type": "Definition",
  "number": "1.44",
  "title": "Cycles.",
  "body": " Cycles   Let be a -tuple of distinct elements of the set . The permutation defined as is called the k-cycle of associated to the tuple , and is denoted . Two cycles are disjoint if .   "
},
{
  "id": "prop_cycle_arith",
  "level": "2",
  "url": "s_permutations.html#prop_cycle_arith",
  "type": "Proposition",
  "number": "1.45",
  "title": "Cycle arithmetic.",
  "body": " Cycle arithmetic   Let and be cycles of the set .   For all , we have .     .         If and are disjoint, then : , disjoint cycles commute.    If , where the are pairwise disjoint cycles, then the order of is the least common multiple of the orders of the : , .       Left as a homework exercise.   "
},
{
  "id": "th_cycle_decomposition",
  "level": "2",
  "url": "s_permutations.html#th_cycle_decomposition",
  "type": "Theorem",
  "number": "1.46",
  "title": "Cycle decomposition.",
  "body": " Cycle decomposition   Let be a finite set, and let .   We can write where the are pairwise disjoint cycles.    If we assume that the union of the set of elements appearing in the cycles is all of , then the set of disjoint cycles appearing in the decomposition is uniquely determined by .       The following is an outline for proving this theorem. Fix .   Step 1  Prove that the relation is an equivalence relation on     Step 2  Let be the equivalence classes defined by the relation above. Prove that for each and each , we have , where and .    Step 3  For each , pick such that , and let be the cycle . Show that .    Step 4 (uniqueness)  Assume be a decomposition of into disjoint cycles , and that the union of elements appearing in the is . For each , let be the set of elements of appearing in the cycle .   Prove that .    Prove that and that after a reordering, we have for all .    Prove that .       "
},
{
  "id": "s_permutations-10",
  "level": "2",
  "url": "s_permutations.html#s_permutations-10",
  "type": "Remark",
  "number": "1.47",
  "title": "Uniqueness of cycle decomposition.",
  "body": " Uniqueness of cycle decomposition  Let's make a few important remarks about the uniqueness of cycle decomposition.   First off, to have any uniqueness property whatsoever, the cycle decomposition must be a disjoint one. Indeed, for all -cycles we have , giving us many different ways of writing as a composition of 2-cycles.    Although the cycles appearing in a disjoint cycle decomposition are unique, the order in which they appear in this expression is not unique. Indeed, since disjoint cycles commute, we can order the on the right side of the equation any way we like!    Furthermore, remember that any given cycle can itself be expressed in many (in fact ) different ways.     "
},
{
  "id": "eg_cycle_decomp",
  "level": "2",
  "url": "s_permutations.html#eg_cycle_decomp",
  "type": "Example",
  "number": "1.48",
  "title": "Cycle decomposition.",
  "body": " Cycle decomposition   We work in the group . Let .   Compute disjoint cycle decompositions of the following permutations.                          Compute .    True or false: .          "
},
{
  "id": "proc_cycle_decomp",
  "level": "2",
  "url": "s_permutations.html#proc_cycle_decomp",
  "type": "Procedure",
  "number": "1.49",
  "title": "",
  "body": "  Let be a finite set, and let . To compute a decomposition of into disjoint cycles, proceed as follows.   Initialize: set , the empty product of cycles.    If all elements of appear in the cycles appearing in , then stop.  Otherwise, pick any that does not appear in and compute the cycle it generates by evaluating at successive powers until you get an output of .  Update: set and repeat Step 2.      "
},
{
  "id": "s_homomorph",
  "level": "1",
  "url": "s_homomorph.html",
  "type": "Section",
  "number": "1.6",
  "title": "Homomorphisms",
  "body": " Homomorphisms   Homomorphism   Let and be groups. A (group) homomorphism is a map satisfying for all .     Homomorphism  There is an important subtlety in the defining property : namely, there are two group operations at play. In more detail, the input of on the left side is a product within the domain group ; the right side on the other hand is a product within the codomain group .  A useful way of thinking of a group homomorphism is as a function between groups that respects the group structure , in the sense articulated by . You might ask: shouldn't a group homomorphism also respect the group identities and group inverses? It turns out that the property is itself enough to guarantee this.    Homomorphism properties   Let be a group homomorphism, and let and be the identity elements of and , respectively.                   Since and is a homomorphism, we have . Now do some algebra in : .    Fix . We have , where the last implication follows from the fact that inverses in groups are unique.        Homormorphisms   Decide whether the given map is a group homormorphism.   Trivial homomorphism  Let and be groups. Define as for all .    Identity map  Let be a group, and let be the identity map as usual.    Fix and define as .    Define as .    Determinant  Assume or for some positive integer . Fix a positive integer and define as .    Exponential map  Define as .           The following proposition serves as a useful tool for constructing homomorphisms out of . You will prove it in your homework.   Homomorphisms from   Fix an integer , and let . Given a group and elements satisfying , the map defined as is a homomorphism.    The proof is left as a homework exercise.     Isomorphism   An isomorphism is a bijective group homomorphism . Groups and are isomorphic , denoted , if there is an isomorphism .     Permutation groups   Let and be nonempty sets of the same cardinality: , . Prove: .    By definition of cardinality, since , there exists a bijective function . Using , we define as . Let's first see why this is a well-defined map from to . From , we see that . Next since and are bijective, so is their composition. Thus , as desired.  Next, we show is a homomorphism. We must show that for all . By definition, we have (dropping the symbols) . This proves is a homomorphism. To show it is bijective, and hence an isomorphism, we will show that it has an inverse function . To this end, given , define . Reasoning exactly as above, we see that is well-defined: , is indeed an element of . Lastly, computations much like the one above show that and thus that the two functions are inverses of one another.    "
},
{
  "id": "d_homomorphism",
  "level": "2",
  "url": "s_homomorph.html#d_homomorphism",
  "type": "Definition",
  "number": "1.50",
  "title": "Homomorphism.",
  "body": " Homomorphism   Let and be groups. A (group) homomorphism is a map satisfying for all .   "
},
{
  "id": "s_homomorph-3",
  "level": "2",
  "url": "s_homomorph.html#s_homomorph-3",
  "type": "Remark",
  "number": "1.51",
  "title": "Homomorphism.",
  "body": " Homomorphism  There is an important subtlety in the defining property : namely, there are two group operations at play. In more detail, the input of on the left side is a product within the domain group ; the right side on the other hand is a product within the codomain group .  A useful way of thinking of a group homomorphism is as a function between groups that respects the group structure , in the sense articulated by . You might ask: shouldn't a group homomorphism also respect the group identities and group inverses? It turns out that the property is itself enough to guarantee this.  "
},
{
  "id": "prop_homo",
  "level": "2",
  "url": "s_homomorph.html#prop_homo",
  "type": "Proposition",
  "number": "1.52",
  "title": "Homomorphism properties.",
  "body": " Homomorphism properties   Let be a group homomorphism, and let and be the identity elements of and , respectively.                   Since and is a homomorphism, we have . Now do some algebra in : .    Fix . We have , where the last implication follows from the fact that inverses in groups are unique.      "
},
{
  "id": "eg_homos",
  "level": "2",
  "url": "s_homomorph.html#eg_homos",
  "type": "Example",
  "number": "1.53",
  "title": "Homormorphisms.",
  "body": " Homormorphisms   Decide whether the given map is a group homormorphism.   Trivial homomorphism  Let and be groups. Define as for all .    Identity map  Let be a group, and let be the identity map as usual.    Fix and define as .    Define as .    Determinant  Assume or for some positive integer . Fix a positive integer and define as .    Exponential map  Define as .          "
},
{
  "id": "prop_Dn_homo",
  "level": "2",
  "url": "s_homomorph.html#prop_Dn_homo",
  "type": "Proposition",
  "number": "1.54",
  "title": "Homomorphisms from <span class=\"process-math\">\\(D_n\\)<\/span>.",
  "body": " Homomorphisms from   Fix an integer , and let . Given a group and elements satisfying , the map defined as is a homomorphism.    The proof is left as a homework exercise.   "
},
{
  "id": "d_isomorphism",
  "level": "2",
  "url": "s_homomorph.html#d_isomorphism",
  "type": "Definition",
  "number": "1.55",
  "title": "Isomorphism.",
  "body": " Isomorphism   An isomorphism is a bijective group homomorphism . Groups and are isomorphic , denoted , if there is an isomorphism .   "
},
{
  "id": "eg_Sn",
  "level": "2",
  "url": "s_homomorph.html#eg_Sn",
  "type": "Example",
  "number": "1.56",
  "title": "Permutation groups.",
  "body": " Permutation groups   Let and be nonempty sets of the same cardinality: , . Prove: .    By definition of cardinality, since , there exists a bijective function . Using , we define as . Let's first see why this is a well-defined map from to . From , we see that . Next since and are bijective, so is their composition. Thus , as desired.  Next, we show is a homomorphism. We must show that for all . By definition, we have (dropping the symbols) . This proves is a homomorphism. To show it is bijective, and hence an isomorphism, we will show that it has an inverse function . To this end, given , define . Reasoning exactly as above, we see that is well-defined: , is indeed an element of . Lastly, computations much like the one above show that and thus that the two functions are inverses of one another.   "
},
{
  "id": "s_group_action",
  "level": "1",
  "url": "s_group_action.html",
  "type": "Section",
  "number": "1.7",
  "title": "Group actions",
  "body": " Group actions   Group action   A (left) group action is a triple , where is a group, is a nonempty set, and is a binary operation satisfying the following axioms.   Associativity   for and .    Identity action   for all .        Group actions      The group acts on via evaluation: , given and , we define .    The group acts on the regular polygon via evaluation: , given and , we define .  Furthermore, acts on the set of vertices of and the set of its edges.    The group acts on via evaluation: , given and , we define .    Any group acts on itself (treated as a set) via multiplication on the left: . Note that multiplication on the right is not in a general a group action since by definition we have and .    Any group acts on itself (treated as a set) via conjugation :     Given or the group of units acts on via multiplication: .        Group actions and homomorphisms   Assume acts on the the nonempty set via the binary operation .   Given , the map defined as . is a permutation of : , .    The map defined as is a group homomorphism.    There is a bijection between the set of all group actions and the set of all homomorphisms given by where given , is the permutation defined as .          By definition for all , so the recipe for does indeed yield a well-defined function . To prove that is a permutation, we will show that it has an inverse: in fact, we claim . We must show that composition of these two functions, in any order, yields the identity map on . This follows from the group action axioms: .            Permutation representation   Given a group , a homomorphism for some nonempty set is called a permutation representation .     Isomorphisms   Prove: is isomorphic to . Use a group action to produce your homomorphism.    Recall the definition of as the set of rigid motions of fixing the equilateral triangle centered at the origin with one vertex at . Let be the set of vertices of . Since acts on (as described in ), by we get a group homomorphism that maps a function to the permutation it defines on via evaluation. This means that , the function restriction of to the set of vertices of . We claim is in fact an isomorphism. Since , it suffices to show that is injective. To this end, we note that given , we have , where the last implication follows from the fact that two rigid motions of are uniquely determined by their values at three non-colinear points.  We have shown that is an isomorphism and thus that . Lastly, by , we have that and thus that . (The isomorphism relation between groups is easily seen to be an equivalence relation since compositions of isomorphisms are isomorphisms.)    "
},
{
  "id": "d_group_action",
  "level": "2",
  "url": "s_group_action.html#d_group_action",
  "type": "Definition",
  "number": "1.57",
  "title": "Group action.",
  "body": " Group action   A (left) group action is a triple , where is a group, is a nonempty set, and is a binary operation satisfying the following axioms.   Associativity   for and .    Identity action   for all .      "
},
{
  "id": "eg_group_actions",
  "level": "2",
  "url": "s_group_action.html#eg_group_actions",
  "type": "Example",
  "number": "1.58",
  "title": "Group actions.",
  "body": " Group actions      The group acts on via evaluation: , given and , we define .    The group acts on the regular polygon via evaluation: , given and , we define .  Furthermore, acts on the set of vertices of and the set of its edges.    The group acts on via evaluation: , given and , we define .    Any group acts on itself (treated as a set) via multiplication on the left: . Note that multiplication on the right is not in a general a group action since by definition we have and .    Any group acts on itself (treated as a set) via conjugation :     Given or the group of units acts on via multiplication: .      "
},
{
  "id": "th_group_actions",
  "level": "2",
  "url": "s_group_action.html#th_group_actions",
  "type": "Theorem",
  "number": "1.59",
  "title": "Group actions and homomorphisms.",
  "body": " Group actions and homomorphisms   Assume acts on the the nonempty set via the binary operation .   Given , the map defined as . is a permutation of : , .    The map defined as is a group homomorphism.    There is a bijection between the set of all group actions and the set of all homomorphisms given by where given , is the permutation defined as .          By definition for all , so the recipe for does indeed yield a well-defined function . To prove that is a permutation, we will show that it has an inverse: in fact, we claim . We must show that composition of these two functions, in any order, yields the identity map on . This follows from the group action axioms: .          "
},
{
  "id": "d_permutation_rep",
  "level": "2",
  "url": "s_group_action.html#d_permutation_rep",
  "type": "Definition",
  "number": "1.60",
  "title": "Permutation representation.",
  "body": " Permutation representation   Given a group , a homomorphism for some nonempty set is called a permutation representation .   "
},
{
  "id": "eg_isom",
  "level": "2",
  "url": "s_group_action.html#eg_isom",
  "type": "Example",
  "number": "1.61",
  "title": "Isomorphisms.",
  "body": " Isomorphisms   Prove: is isomorphic to . Use a group action to produce your homomorphism.    Recall the definition of as the set of rigid motions of fixing the equilateral triangle centered at the origin with one vertex at . Let be the set of vertices of . Since acts on (as described in ), by we get a group homomorphism that maps a function to the permutation it defines on via evaluation. This means that , the function restriction of to the set of vertices of . We claim is in fact an isomorphism. Since , it suffices to show that is injective. To this end, we note that given , we have , where the last implication follows from the fact that two rigid motions of are uniquely determined by their values at three non-colinear points.  We have shown that is an isomorphism and thus that . Lastly, by , we have that and thus that . (The isomorphism relation between groups is easily seen to be an equivalence relation since compositions of isomorphisms are isomorphisms.)   "
},
{
  "id": "s_subgroups",
  "level": "1",
  "url": "s_subgroups.html",
  "type": "Section",
  "number": "1.8",
  "title": "Subgroups",
  "body": " Subgroups   Subgroup    is a subgroup of    A subgroup of a group is a subset satisfying the following properties.   Identity element   .    Closed under group law  For all , if , then . Using logical shorthand: .    Closed under inverses  For all , if , then . Using logical shorthand: .   We write to denote that is a subgroup of .     Subgroup  There are common equivalent variations of . For example we could define a subgroup of to be a subset satisfying the following conditions.    .    For all , if , then .   Such equivalent versions have the advantage of brevity. I prefer as it makes more evident the important result of : namely, that subgroups are themselves examples of groups.     Let be a group and suppose is a subgroup of .   Restricting the group operation to defines a binary operation .    The pair is a group.          The only issue here is whether the output of the proposed operation actually land in , and this is guaranteed by axiom (ii) of .    Since is just the restriction of to the subset , it is easy to see that it inherits the group axiom properties of .  For example, since for all elements , it is certainly true for all . Thus is associative.  Similarly, since by definition and is the identity with respect to , it is also is an identity element with respect to . The same argument shows that the inverse of an element of with respect to is also an inverse with respect to ; since by definition is closed under the inverse operations, all elements of have inverses with respect to .        Examples      Given a group the subsets and itself are both easily seen to be subgroups.    For all , the set is a subgroup of .    For all , the set is not a subgroup.    For any group and element , the subset is a subgroup of .        Cyclic groups   Given a group and element , the subgroup is the cyclic group generated by , denoted .  A group is cyclic if for some .     Cyclic groups   Decide which of the following groups are cyclic. If the example is a family of groups, decide whether all elements of the family are cyclic or not.                             Since , is cyclic.    No is cyclic, as a simple order computation shows. Namely, all rotations in have order at most , and all reflections have order . It follows that for all . Since , we see that there is no satisfying .    We have , showing that it is cylic.    The group is not always cyclic, the first counterexample being . (Show for yourself that this group is cyclic for .) To see why is not cyclic, we first compute , and then note that each of these elements has order at most . It follows that is not cyclic.       A cyclic group is abelian: given and , we have . As you might have guessed, however, not all abelian groups are cyclic. There are many counterexamples to such a claim, but the smallest one is the group . It is easy to see, using the product group operation defined in  for all , and thus that for all . Since , we conclude that the group is not cyclic.  This group is important enough to warrant its own name. We call it, and any group that is isomorphic to it, a Klein 4-group . It is easy to see that such a group has a presentation of the form . In , we can take and . We make use of this fact in our official definition of a Klein 4-group.   Klein 4-group   We call a group a Klein 4-group if . We will use the notation to denote a Klein 4-group with generators and .     Klein 4-group  So what's with the V in our notation? This group is called the Kleinsche Vierergruppe in German, vier being German for four .    Subgroups of      Find all subgroups of .    Find all cyclic subgroups of . Produce a noncyclic subgroup of .            Kernel of homomorphism   Let be a group homomorphism. The kernel of , denoted , is the set .     Kernel and image   Let be a group homomorphism.    is a subgroup of .     is a subgroup of .            Kernel and image   Compute and for the given group homomorphism .   Fix and define .     ,     Let be the set of three ``diameters\" in the regular hexagon . Let be the homomorphism associated to the group action of on .            Centralizer, normalizer, center    centralizer of in     normalizer of in    Let be a subset of the group .   The centralizer of in , denoted , is the set .    The normalizer of in , denoted , is the set .    The center of , denoted , is the set .         Centralizer, normalizer, center   Let be a group, and let be a subset of .    is a subgroup of .     is a subgroup of .     is a subgroup of .            Centralizer, normalizer, center   Let .   Let . Compute and .    Let . Compute and .    Compute .           "
},
{
  "id": "d_subgroup",
  "level": "2",
  "url": "s_subgroups.html#d_subgroup",
  "type": "Definition",
  "number": "1.62",
  "title": "Subgroup.",
  "body": " Subgroup    is a subgroup of    A subgroup of a group is a subset satisfying the following properties.   Identity element   .    Closed under group law  For all , if , then . Using logical shorthand: .    Closed under inverses  For all , if , then . Using logical shorthand: .   We write to denote that is a subgroup of .   "
},
{
  "id": "s_subgroups-3",
  "level": "2",
  "url": "s_subgroups.html#s_subgroups-3",
  "type": "Remark",
  "number": "1.63",
  "title": "Subgroup.",
  "body": " Subgroup  There are common equivalent variations of . For example we could define a subgroup of to be a subset satisfying the following conditions.    .    For all , if , then .   Such equivalent versions have the advantage of brevity. I prefer as it makes more evident the important result of : namely, that subgroups are themselves examples of groups.  "
},
{
  "id": "prop_subgrp_is_grp",
  "level": "2",
  "url": "s_subgroups.html#prop_subgrp_is_grp",
  "type": "Proposition",
  "number": "1.64",
  "title": "",
  "body": "  Let be a group and suppose is a subgroup of .   Restricting the group operation to defines a binary operation .    The pair is a group.          The only issue here is whether the output of the proposed operation actually land in , and this is guaranteed by axiom (ii) of .    Since is just the restriction of to the subset , it is easy to see that it inherits the group axiom properties of .  For example, since for all elements , it is certainly true for all . Thus is associative.  Similarly, since by definition and is the identity with respect to , it is also is an identity element with respect to . The same argument shows that the inverse of an element of with respect to is also an inverse with respect to ; since by definition is closed under the inverse operations, all elements of have inverses with respect to .      "
},
{
  "id": "eg_",
  "level": "2",
  "url": "s_subgroups.html#eg_",
  "type": "Example",
  "number": "1.65",
  "title": "Examples.",
  "body": " Examples      Given a group the subsets and itself are both easily seen to be subgroups.    For all , the set is a subgroup of .    For all , the set is not a subgroup.    For any group and element , the subset is a subgroup of .      "
},
{
  "id": "d_cyclic_groups",
  "level": "2",
  "url": "s_subgroups.html#d_cyclic_groups",
  "type": "Definition",
  "number": "1.66",
  "title": "Cyclic groups.",
  "body": " Cyclic groups   Given a group and element , the subgroup is the cyclic group generated by , denoted .  A group is cyclic if for some .   "
},
{
  "id": "eg_cyclic_groups",
  "level": "2",
  "url": "s_subgroups.html#eg_cyclic_groups",
  "type": "Example",
  "number": "1.67",
  "title": "Cyclic groups.",
  "body": " Cyclic groups   Decide which of the following groups are cyclic. If the example is a family of groups, decide whether all elements of the family are cyclic or not.                             Since , is cyclic.    No is cyclic, as a simple order computation shows. Namely, all rotations in have order at most , and all reflections have order . It follows that for all . Since , we see that there is no satisfying .    We have , showing that it is cylic.    The group is not always cyclic, the first counterexample being . (Show for yourself that this group is cyclic for .) To see why is not cyclic, we first compute , and then note that each of these elements has order at most . It follows that is not cyclic.      "
},
{
  "id": "s_subgroups-9",
  "level": "2",
  "url": "s_subgroups.html#s_subgroups-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Klein 4-group "
},
{
  "id": "spec_klein_4",
  "level": "2",
  "url": "s_subgroups.html#spec_klein_4",
  "type": "Specimen",
  "number": "11",
  "title": "Klein 4-group.",
  "body": " Klein 4-group   We call a group a Klein 4-group if . We will use the notation to denote a Klein 4-group with generators and .   "
},
{
  "id": "s_subgroups-11",
  "level": "2",
  "url": "s_subgroups.html#s_subgroups-11",
  "type": "Remark",
  "number": "1.68",
  "title": "Klein 4-group.",
  "body": " Klein 4-group  So what's with the V in our notation? This group is called the Kleinsche Vierergruppe in German, vier being German for four .  "
},
{
  "id": "eg_D_n",
  "level": "2",
  "url": "s_subgroups.html#eg_D_n",
  "type": "Example",
  "number": "1.69",
  "title": "Subgroups of <span class=\"process-math\">\\(D_n\\)<\/span>.",
  "body": " Subgroups of      Find all subgroups of .    Find all cyclic subgroups of . Produce a noncyclic subgroup of .          "
},
{
  "id": "d_kernel",
  "level": "2",
  "url": "s_subgroups.html#d_kernel",
  "type": "Definition",
  "number": "1.70",
  "title": "Kernel of homomorphism.",
  "body": " Kernel of homomorphism   Let be a group homomorphism. The kernel of , denoted , is the set .   "
},
{
  "id": "th_kernel_image_subgroup",
  "level": "2",
  "url": "s_subgroups.html#th_kernel_image_subgroup",
  "type": "Theorem",
  "number": "1.71",
  "title": "Kernel and image.",
  "body": " Kernel and image   Let be a group homomorphism.    is a subgroup of .     is a subgroup of .          "
},
{
  "id": "eg_ker_im",
  "level": "2",
  "url": "s_subgroups.html#eg_ker_im",
  "type": "Example",
  "number": "1.72",
  "title": "Kernel and image.",
  "body": " Kernel and image   Compute and for the given group homomorphism .   Fix and define .     ,     Let be the set of three ``diameters\" in the regular hexagon . Let be the homomorphism associated to the group action of on .          "
},
{
  "id": "d_centralizer",
  "level": "2",
  "url": "s_subgroups.html#d_centralizer",
  "type": "Definition",
  "number": "1.73",
  "title": "Centralizer, normalizer, center.",
  "body": " Centralizer, normalizer, center    centralizer of in     normalizer of in    Let be a subset of the group .   The centralizer of in , denoted , is the set .    The normalizer of in , denoted , is the set .    The center of , denoted , is the set .       "
},
{
  "id": "th_centralzer_norm_center",
  "level": "2",
  "url": "s_subgroups.html#th_centralzer_norm_center",
  "type": "Theorem",
  "number": "1.74",
  "title": "Centralizer, normalizer, center.",
  "body": " Centralizer, normalizer, center   Let be a group, and let be a subset of .    is a subgroup of .     is a subgroup of .     is a subgroup of .          "
},
{
  "id": "eg_centralzer_normalizer_center",
  "level": "2",
  "url": "s_subgroups.html#eg_centralzer_normalizer_center",
  "type": "Example",
  "number": "1.75",
  "title": "Centralizer, normalizer, center.",
  "body": " Centralizer, normalizer, center   Let .   Let . Compute and .    Let . Compute and .    Compute .          "
},
{
  "id": "s_cyclic",
  "level": "1",
  "url": "s_cyclic.html",
  "type": "Section",
  "number": "1.9",
  "title": "Cyclic groups",
  "body": " Cyclic groups  Our approach to studying cyclic groups will make heavy use of some elementary number theory concepts, most of which we haven't officially proved in this course yet. You can rest assured that we will eventually cover these results (specifically, when treading principal ideal domains in Math 331-2). We get ahead of ourselves by introducing them now mainly for the convenience of using these techniques in computational examples. For example, provides an easy method for computing greatest common divisors and least common multiples from the prime factorizations of two given integers.   Prime factorization formulas   Let and be positive integers, and let , where is a list of distinct prime integers, and for all .   We have .    We have .        Order of group elements   Let be an element of .   If , then if and only if .    If for , then if and only if .    If , for integers , then .    If , then for all .        Isomorphic cyclic groups   Let and be cyclic groups.    .     if and only if .            Isomorphic cyclic groups   If is cyclic, then or for some positive integer .     Cyclic group equivalence   A group is cyclic if and only if all subgroups of are cyclic.         Subgroups of infinite cyclic group   Let and assume .   All subgroups of are cyclic.    The correspondence is a bijection. In other words, every subgroup of is equal to exactly one of the following list of subgroups: .            Subgroups of finite cyclic group   Let and assume .   All subgroups of are cyclic.    The correspondence from the positive divisors of and the subgroups of . Furthermore, . As a result for each positive divisor of there is a unique subgroup of that cardinality.           "
},
{
  "id": "th_fact_gcd_lcm",
  "level": "2",
  "url": "s_cyclic.html#th_fact_gcd_lcm",
  "type": "Theorem",
  "number": "1.76",
  "title": "Prime factorization formulas.",
  "body": " Prime factorization formulas   Let and be positive integers, and let , where is a list of distinct prime integers, and for all .   We have .    We have .      "
},
{
  "id": "prop_finite_order",
  "level": "2",
  "url": "s_cyclic.html#prop_finite_order",
  "type": "Proposition",
  "number": "1.77",
  "title": "Order of group elements.",
  "body": " Order of group elements   Let be an element of .   If , then if and only if .    If for , then if and only if .    If , for integers , then .    If , then for all .      "
},
{
  "id": "th_cyclic_isom",
  "level": "2",
  "url": "s_cyclic.html#th_cyclic_isom",
  "type": "Theorem",
  "number": "1.78",
  "title": "Isomorphic cyclic groups.",
  "body": " Isomorphic cyclic groups   Let and be cyclic groups.    .     if and only if .          "
},
{
  "id": "cor_cyclic_isom",
  "level": "2",
  "url": "s_cyclic.html#cor_cyclic_isom",
  "type": "Corollary",
  "number": "1.79",
  "title": "Isomorphic cyclic groups.",
  "body": " Isomorphic cyclic groups   If is cyclic, then or for some positive integer .   "
},
{
  "id": "th_cyclic_subgroups",
  "level": "2",
  "url": "s_cyclic.html#th_cyclic_subgroups",
  "type": "Theorem",
  "number": "1.80",
  "title": "Cyclic group equivalence.",
  "body": " Cyclic group equivalence   A group is cyclic if and only if all subgroups of are cyclic.       "
},
{
  "id": "th_cyclic_subgroup_inf",
  "level": "2",
  "url": "s_cyclic.html#th_cyclic_subgroup_inf",
  "type": "Theorem",
  "number": "1.81",
  "title": "Subgroups of infinite cyclic group.",
  "body": " Subgroups of infinite cyclic group   Let and assume .   All subgroups of are cyclic.    The correspondence is a bijection. In other words, every subgroup of is equal to exactly one of the following list of subgroups: .          "
},
{
  "id": "th_cyclic_subgroup_fin",
  "level": "2",
  "url": "s_cyclic.html#th_cyclic_subgroup_fin",
  "type": "Theorem",
  "number": "1.82",
  "title": "Subgroups of finite cyclic group.",
  "body": " Subgroups of finite cyclic group   Let and assume .   All subgroups of are cyclic.    The correspondence from the positive divisors of and the subgroups of . Furthermore, . As a result for each positive divisor of there is a unique subgroup of that cardinality.          "
},
{
  "id": "s_subgrp_lattice",
  "level": "1",
  "url": "s_subgrp_lattice.html",
  "type": "Section",
  "number": "1.10",
  "title": "Subgroup lattice",
  "body": " Subgroup lattice  A deep understanding of a group will include an understanding of its subgroup structure. In more detail we want to know (a) what the set of all subgroups of is, and (b) for all , we want to know whether , , or neither.  Using slightly fancier language, the pair of all subsgroups of partially ordered by the set inclusion relation (which recall is just for subgroups) is what is called a partially ordered set , or lattice . We wish to understand the precise structure of this lattice.   Intersection of subgroups   Let be a group, and let be a family of subgroups indexed by the nonempty set . The intersection is a subgroup of . In plain English, the intersection of a family of subgroups is again a subgroup.    Note that the indexing set is arbitrary here: it need not be finite, or even countable. This does not complicate our proof in anyway: in the end, this is an exercise in dealinging with the quantifier for all that defines the intersection. Let's show that the three axioms of are satisfied.   Since for all , by definition , and thus .    Assume . By definition, this means for all . Since each is a subgroup of , we have for all , and thus .    Assume . By definition, this means for all . Since each is a subgroup of , we have for all , and thus .        Subgroup generated by a set    subgroup generated by set    Let be a subset of the group . The subgroup generated by , denoted , is defined as the intersection of all subgroups of containing : , .     Subgroup generated by a set   Let be a subset of .    is the smallest subgroup (with respect to the ordering) of containing : , if and , then . Using logical shorthand: .     is the set of all finite products of elements of and their inverses: . We declare, by convention, that a product of elements (the empty product ) is equal to .       "
},
{
  "id": "prop_intersection_subgroups",
  "level": "2",
  "url": "s_subgrp_lattice.html#prop_intersection_subgroups",
  "type": "Proposition",
  "number": "1.83",
  "title": "Intersection of subgroups.",
  "body": " Intersection of subgroups   Let be a group, and let be a family of subgroups indexed by the nonempty set . The intersection is a subgroup of . In plain English, the intersection of a family of subgroups is again a subgroup.    Note that the indexing set is arbitrary here: it need not be finite, or even countable. This does not complicate our proof in anyway: in the end, this is an exercise in dealinging with the quantifier for all that defines the intersection. Let's show that the three axioms of are satisfied.   Since for all , by definition , and thus .    Assume . By definition, this means for all . Since each is a subgroup of , we have for all , and thus .    Assume . By definition, this means for all . Since each is a subgroup of , we have for all , and thus .      "
},
{
  "id": "d_subgroup_generated",
  "level": "2",
  "url": "s_subgrp_lattice.html#d_subgroup_generated",
  "type": "Definition",
  "number": "1.84",
  "title": "Subgroup generated by a set.",
  "body": " Subgroup generated by a set    subgroup generated by set    Let be a subset of the group . The subgroup generated by , denoted , is defined as the intersection of all subgroups of containing : , .   "
},
{
  "id": "prop_subgroup_generated",
  "level": "2",
  "url": "s_subgrp_lattice.html#prop_subgroup_generated",
  "type": "Proposition",
  "number": "1.85",
  "title": "Subgroup generated by a set.",
  "body": " Subgroup generated by a set   Let be a subset of .    is the smallest subgroup (with respect to the ordering) of containing : , if and , then . Using logical shorthand: .     is the set of all finite products of elements of and their inverses: . We declare, by convention, that a product of elements (the empty product ) is equal to .      "
},
{
  "id": "s_cosets_lagrange",
  "level": "1",
  "url": "s_cosets_lagrange.html",
  "type": "Section",
  "number": "1.11",
  "title": "Cosets and Lagrange’s theorem",
  "body": " Cosets and Lagrange's theorem   Group operations on subsets   Let be a subset of the group . Given , the sets , , are defined as follows: .     Coset and coset space   Let be a subgroup of the group . Given the set defined as is called the left -coset in corresponding to , and the set defined as is called the right -coset in corresponding to . Elements of a coset are called representatives of that coset.  The set of all left (resp. right) -cosets is called the left (resp. right) coset space of , and is denoted (resp. ).     Cosets are left cosets by default  Unless stated otherwise, a coset in this course will be assumed to be a left coset.    Cosets in   Recall that any subgroup of can be described as for a unique . Show that the cosets of are precisely the congruence classes modulo .    Fix . Given the coset is by definition . This computation shows cosets are congruence classes and vice versa.     Cosets in   Let and let . Compute .    We have . A simple computation shows . This suggests that . This can be shown by proving that if and only if . below takes care of this for us.     Cosets in   Let and let . Compute and .    We have . We compute We conclude that . Let's look at the right cosets: . We conclude that .     Cosets and coset space   Let be a subgroup of the group .   The relation if and only if for some is an equivalence relation and the cosets are the corresponding equivalence classes.    Given , the following statements are equivalent.    .     .     .     .       The cosets of form a partition of . That is, we have and .       This is another example of a theorem where we get a lot of mileage out of defining an equivalence relation. The relation if and only if is easily seen to be an equivalence relation: . Since the equivalence classes of are precisely the cosets by definition, statement (3) and most of the equivalent statements in (2) follow immediately. The exception is the statement that if and only if , which follows using equivalent formulation (b), since .     Lagrange's theorem   Let be a subgroup of the group .   We have . When is infinite, this can be interpreted as saying is infinite or is infinite.    If , then we have .       Statement (2) follows directly from (1). Statement (1) follows from and a counting argument. First observe that for all we have as witnessed by the map , which has inverse map . Next, let be the family of distinct cosets, so that we have and for all . If and are both finite, then the sum rule for disjoint sets yields . This both proves the result in the case where is finite, and shows that if is infinite, than either or is infinite.     Index of subgroup    index of in    Given a subgroup of the group , its index is defined as . In other words, is the cardinality of the coset space .     Lagrange's theorem  Using the index notation, we can re-write Lagrange's theorem as .    Cardinality of subgroups   Assume is a finite group.   For any subgroup , we have .    For any we have .        Groups of prime cardinality   If for a prime integer , then is cyclic. It follows that .    "
},
{
  "id": "d_set_actions",
  "level": "2",
  "url": "s_cosets_lagrange.html#d_set_actions",
  "type": "Definition",
  "number": "1.86",
  "title": "Group operations on subsets.",
  "body": " Group operations on subsets   Let be a subset of the group . Given , the sets , , are defined as follows: .   "
},
{
  "id": "d_cosets",
  "level": "2",
  "url": "s_cosets_lagrange.html#d_cosets",
  "type": "Definition",
  "number": "1.87",
  "title": "Coset and coset space.",
  "body": " Coset and coset space   Let be a subgroup of the group . Given the set defined as is called the left -coset in corresponding to , and the set defined as is called the right -coset in corresponding to . Elements of a coset are called representatives of that coset.  The set of all left (resp. right) -cosets is called the left (resp. right) coset space of , and is denoted (resp. ).   "
},
{
  "id": "s_cosets_lagrange-4",
  "level": "2",
  "url": "s_cosets_lagrange.html#s_cosets_lagrange-4",
  "type": "Notation",
  "number": "1.88",
  "title": "Cosets are left cosets by default.",
  "body": " Cosets are left cosets by default  Unless stated otherwise, a coset in this course will be assumed to be a left coset.  "
},
{
  "id": "eg_cosets_Z",
  "level": "2",
  "url": "s_cosets_lagrange.html#eg_cosets_Z",
  "type": "Example",
  "number": "1.89",
  "title": "Cosets in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Cosets in   Recall that any subgroup of can be described as for a unique . Show that the cosets of are precisely the congruence classes modulo .    Fix . Given the coset is by definition . This computation shows cosets are congruence classes and vice versa.   "
},
{
  "id": "eg_cosets_Zn",
  "level": "2",
  "url": "s_cosets_lagrange.html#eg_cosets_Zn",
  "type": "Example",
  "number": "1.90",
  "title": "Cosets in <span class=\"process-math\">\\(\\Z\/12\\Z\\)<\/span>.",
  "body": " Cosets in   Let and let . Compute .    We have . A simple computation shows . This suggests that . This can be shown by proving that if and only if . below takes care of this for us.   "
},
{
  "id": "eg_cosets_Dn",
  "level": "2",
  "url": "s_cosets_lagrange.html#eg_cosets_Dn",
  "type": "Example",
  "number": "1.91",
  "title": "Cosets in <span class=\"process-math\">\\(D_4\\)<\/span>.",
  "body": " Cosets in   Let and let . Compute and .    We have . We compute We conclude that . Let's look at the right cosets: . We conclude that .   "
},
{
  "id": "th_cosets",
  "level": "2",
  "url": "s_cosets_lagrange.html#th_cosets",
  "type": "Theorem",
  "number": "1.92",
  "title": "Cosets and coset space.",
  "body": " Cosets and coset space   Let be a subgroup of the group .   The relation if and only if for some is an equivalence relation and the cosets are the corresponding equivalence classes.    Given , the following statements are equivalent.    .     .     .     .       The cosets of form a partition of . That is, we have and .       This is another example of a theorem where we get a lot of mileage out of defining an equivalence relation. The relation if and only if is easily seen to be an equivalence relation: . Since the equivalence classes of are precisely the cosets by definition, statement (3) and most of the equivalent statements in (2) follow immediately. The exception is the statement that if and only if , which follows using equivalent formulation (b), since .   "
},
{
  "id": "th_lagrange",
  "level": "2",
  "url": "s_cosets_lagrange.html#th_lagrange",
  "type": "Theorem",
  "number": "1.93",
  "title": "Lagrange’s theorem.",
  "body": " Lagrange's theorem   Let be a subgroup of the group .   We have . When is infinite, this can be interpreted as saying is infinite or is infinite.    If , then we have .       Statement (2) follows directly from (1). Statement (1) follows from and a counting argument. First observe that for all we have as witnessed by the map , which has inverse map . Next, let be the family of distinct cosets, so that we have and for all . If and are both finite, then the sum rule for disjoint sets yields . This both proves the result in the case where is finite, and shows that if is infinite, than either or is infinite.   "
},
{
  "id": "d_index",
  "level": "2",
  "url": "s_cosets_lagrange.html#d_index",
  "type": "Definition",
  "number": "1.94",
  "title": "Index of subgroup.",
  "body": " Index of subgroup    index of in    Given a subgroup of the group , its index is defined as . In other words, is the cardinality of the coset space .   "
},
{
  "id": "s_cosets_lagrange-11",
  "level": "2",
  "url": "s_cosets_lagrange.html#s_cosets_lagrange-11",
  "type": "Remark",
  "number": "1.95",
  "title": "Lagrange’s theorem.",
  "body": " Lagrange's theorem  Using the index notation, we can re-write Lagrange's theorem as .  "
},
{
  "id": "cor_subgroup_card",
  "level": "2",
  "url": "s_cosets_lagrange.html#cor_subgroup_card",
  "type": "Corollary",
  "number": "1.96",
  "title": "Cardinality of subgroups.",
  "body": " Cardinality of subgroups   Assume is a finite group.   For any subgroup , we have .    For any we have .      "
},
{
  "id": "cor_groups_prime_card",
  "level": "2",
  "url": "s_cosets_lagrange.html#cor_groups_prime_card",
  "type": "Corollary",
  "number": "1.97",
  "title": "Groups of prime cardinality.",
  "body": " Groups of prime cardinality   If for a prime integer , then is cyclic. It follows that .   "
},
{
  "id": "s_quotient_group",
  "level": "1",
  "url": "s_quotient_group.html",
  "type": "Section",
  "number": "1.12",
  "title": "Quotient groups",
  "body": " Quotient groups  Given a subgroup of we would like to put a group structure on the coset space : indeed, what could be more natural than to define our binary operation as ? It would seem the relevant group operations would follow readily from this definition. The issue is that the proposed operation is not always well defined! That is, if and for elements , it is not necessarily the case that .  Indeed, continuing with , where and , we have and yet . It turns out that magic property a subgroup needs to satisfy in order for the operation to be well defined is that be a normal subgroup .   Normal subgroup   A subgroup of the group is called normal if for all . We write to indicate that is a normal subgroup of .     Normal subgroups   Let be a subgroup of the group . The following statements are equivalent.    .          for all .    The operation is well defined.       The equivalence follows directly from the definition of normality and .  The equivalence is left as an exercise.  We prove . Assume . Assume and . We will show that . Since and , we have and for some elements , and thus . Next since (assuming (3)), we have for some , yielding . It follows from that , as desired.  The implication is left as an exercise.     Quotient groups   Let be a normal subgroup of the group .   The pair , where is the operation , is a group.  The group identity of is the coset . Given coset its group inverse is the coset .    The map defined as is a surjective group homormorphism satisfying .            Normality in   Decide whether the given subgroup of is normal. Verify your answer by checking multiple conditions of the equivalence in .                          Abelian groups   Show that an abelian group every subgroup is normal.    Let be abelian. Given a subgroup , for any and we have . It follows that for all and hence that is normal.    Kernels of group homomorphisms are normal subgroups. In fact, as we show below, a subgroup is normal if and only if it is the kernel of a group homomorphism.   Normality and kernels   Let be a subgroup of . The following statements are equivalent.    is normal.     for some group homomorphism .        Normality in   Determine whether the given subgroup is normal in . If it is, identify the corresponding quotient group with a familiar group.                    "
},
{
  "id": "d_normal_subgroup",
  "level": "2",
  "url": "s_quotient_group.html#d_normal_subgroup",
  "type": "Definition",
  "number": "1.98",
  "title": "Normal subgroup.",
  "body": " Normal subgroup   A subgroup of the group is called normal if for all . We write to indicate that is a normal subgroup of .   "
},
{
  "id": "th_normal",
  "level": "2",
  "url": "s_quotient_group.html#th_normal",
  "type": "Theorem",
  "number": "1.99",
  "title": "Normal subgroups.",
  "body": " Normal subgroups   Let be a subgroup of the group . The following statements are equivalent.    .          for all .    The operation is well defined.       The equivalence follows directly from the definition of normality and .  The equivalence is left as an exercise.  We prove . Assume . Assume and . We will show that . Since and , we have and for some elements , and thus . Next since (assuming (3)), we have for some , yielding . It follows from that , as desired.  The implication is left as an exercise.   "
},
{
  "id": "th_quot_group",
  "level": "2",
  "url": "s_quotient_group.html#th_quot_group",
  "type": "Theorem",
  "number": "1.100",
  "title": "Quotient groups.",
  "body": " Quotient groups   Let be a normal subgroup of the group .   The pair , where is the operation , is a group.  The group identity of is the coset . Given coset its group inverse is the coset .    The map defined as is a surjective group homormorphism satisfying .          "
},
{
  "id": "eg_normality_D4",
  "level": "2",
  "url": "s_quotient_group.html#eg_normality_D4",
  "type": "Example",
  "number": "1.101",
  "title": "Normality in <span class=\"process-math\">\\(D_4\\)<\/span>.",
  "body": " Normality in   Decide whether the given subgroup of is normal. Verify your answer by checking multiple conditions of the equivalence in .                        "
},
{
  "id": "eg_normal_abelian",
  "level": "2",
  "url": "s_quotient_group.html#eg_normal_abelian",
  "type": "Example",
  "number": "1.102",
  "title": "Abelian groups.",
  "body": " Abelian groups   Show that an abelian group every subgroup is normal.    Let be abelian. Given a subgroup , for any and we have . It follows that for all and hence that is normal.   "
},
{
  "id": "cor_normal_ker",
  "level": "2",
  "url": "s_quotient_group.html#cor_normal_ker",
  "type": "Corollary",
  "number": "1.103",
  "title": "Normality and kernels.",
  "body": " Normality and kernels   Let be a subgroup of . The following statements are equivalent.    is normal.     for some group homomorphism .      "
},
{
  "id": "eg_normality_S4",
  "level": "2",
  "url": "s_quotient_group.html#eg_normality_S4",
  "type": "Example",
  "number": "1.104",
  "title": "Normality in <span class=\"process-math\">\\(S_4\\)<\/span>.",
  "body": " Normality in   Determine whether the given subgroup is normal in . If it is, identify the corresponding quotient group with a familiar group.                   "
},
{
  "id": "s_isom_thms_A",
  "level": "1",
  "url": "s_isom_thms_A.html",
  "type": "Section",
  "number": "1.13",
  "title": "First isomorphism theorem",
  "body": " First isomorphism theorem   Quotient map: universal property   Let be a normal subgroup of , and let be the corresponding quotient map. Given any group homomorphism satisfying , there exists a unique group homomorphism satisfying . Moreover, is defined as . for all .  In short, there is a unique homomorphism making the diagram below commutative.   Universal property of quotient map   Universal property of quotient map       First consider the uniqueness claim. If satisfies , then since for all , we must have . Thus there is at most one such homomorphism , in fact we must define .  We now show that this formula gives rise to a well-defined map . We must show that if , then . We have . Having shown is well defined, it is easy to how that it is a group homomorphism. We have . Lastly, satisfies essentially by definition, since for all .     First isomorphism theorem   Let be a group homomorphism, and let be the quotient map.    .    In more detail, letting , the map defined as for all is an isomorphism, and is the unique homomorphism satisfying .       Assume is a group homomorphism. Setting , implies that the map is a homomorphism. Furthermore, it is easy to see that and hence that is surjective. We claim that is injective and hence that the map above is an isomorphism, showing .  According to , it suffices to show that . By definition, we have , as desired.     Kernel and injectivity   Let be a group homomorphism.  Given we have .    is injective if and only if .          We have . Thus .    If is injective, then if and only if , showing that . Inversely, if is not injective, then we can find such that . But then . Since it follows that and hence .        First isomorphism theorem   Let , a normal subgroup of . Use the first isomorphism theorem to identify with a familiar group.    We convinced ourselves earlier that was isomorphic to , which is isomorphic to . That argument involved finding appropriate generators of the quotient group that gave us the relations. Let's see how the first isomorphism theorem can clean things up a bit.  Consider the set where . In other words, is the set of all partitions of into two disjoint sets of cardinality 2. It is easy to see that $S_4$ acts on as . As such we get a homomorphism that associates to each its corresponding permutation of the elements of . The first isomorphism theorem tells us that . We will show that and , from whence it follows that , where the last isomorphism follows from the fact that .  Let's see why . Note that by definition for an element to lie in , we need . An argument similar to the ones we used to compute normalizers and centralizers in shows that given , we have . It follows that for all if and only if . Thus .  Having proved that , the first isomorphism tells us that , and in particular . Since , we conclude that , and hence that , as claimed.     First isomorphism theorem:   Let be one of our familiar rings: , or for some positive integer . Fix a positive integer and define . Show that is normal in and identify the quotient with a familiar group.    The determinant map is a group homomorphism, and it is easy to see that it is surjective: given the diagonal matrix with in the first diagonal entry and 1's elsewhere satisfies .  By definition we have . It follows that and we have by the first isomorphism theorem.     First isomorphism theorem:   Let , and let    Prove that is a subgroup of and that is a subgroup of .    Prove that .    Prove that .       This example relies on the following notions from complex arithmetic.   Given , with , we define its modulus as . Geometrically, this is just the length of the vector .   Given , if the point has polar coordinates , then we have . Defining , we have . If we specify that , then we have .   Given and , we have . In other words, geomtrically speaking, two multiply two complex numbers, we (a) multiply their moduli, and (b) add their angles.   Using these properties, we see that the map defined as is a group homomorphism with kernel . We leave the details to discussion section.     Circle group and roots of unity   The sets are subgroups of called the circle group and roots of unity of , respectively.    "
},
{
  "id": "th_quot_map",
  "level": "2",
  "url": "s_isom_thms_A.html#th_quot_map",
  "type": "Theorem",
  "number": "1.105",
  "title": "Quotient map: universal property.",
  "body": " Quotient map: universal property   Let be a normal subgroup of , and let be the corresponding quotient map. Given any group homomorphism satisfying , there exists a unique group homomorphism satisfying . Moreover, is defined as . for all .  In short, there is a unique homomorphism making the diagram below commutative.   Universal property of quotient map   Universal property of quotient map       First consider the uniqueness claim. If satisfies , then since for all , we must have . Thus there is at most one such homomorphism , in fact we must define .  We now show that this formula gives rise to a well-defined map . We must show that if , then . We have . Having shown is well defined, it is easy to how that it is a group homomorphism. We have . Lastly, satisfies essentially by definition, since for all .   "
},
{
  "id": "th_isom_thm_1",
  "level": "2",
  "url": "s_isom_thms_A.html#th_isom_thm_1",
  "type": "Theorem",
  "number": "1.107",
  "title": "First isomorphism theorem.",
  "body": " First isomorphism theorem   Let be a group homomorphism, and let be the quotient map.    .    In more detail, letting , the map defined as for all is an isomorphism, and is the unique homomorphism satisfying .       Assume is a group homomorphism. Setting , implies that the map is a homomorphism. Furthermore, it is easy to see that and hence that is surjective. We claim that is injective and hence that the map above is an isomorphism, showing .  According to , it suffices to show that . By definition, we have , as desired.   "
},
{
  "id": "lemma_ker_inj",
  "level": "2",
  "url": "s_isom_thms_A.html#lemma_ker_inj",
  "type": "Lemma",
  "number": "1.108",
  "title": "Kernel and injectivity.",
  "body": " Kernel and injectivity   Let be a group homomorphism.  Given we have .    is injective if and only if .          We have . Thus .    If is injective, then if and only if , showing that . Inversely, if is not injective, then we can find such that . But then . Since it follows that and hence .      "
},
{
  "id": "eg_first_isom",
  "level": "2",
  "url": "s_isom_thms_A.html#eg_first_isom",
  "type": "Example",
  "number": "1.109",
  "title": "First isomorphism theorem.",
  "body": " First isomorphism theorem   Let , a normal subgroup of . Use the first isomorphism theorem to identify with a familiar group.    We convinced ourselves earlier that was isomorphic to , which is isomorphic to . That argument involved finding appropriate generators of the quotient group that gave us the relations. Let's see how the first isomorphism theorem can clean things up a bit.  Consider the set where . In other words, is the set of all partitions of into two disjoint sets of cardinality 2. It is easy to see that $S_4$ acts on as . As such we get a homomorphism that associates to each its corresponding permutation of the elements of . The first isomorphism theorem tells us that . We will show that and , from whence it follows that , where the last isomorphism follows from the fact that .  Let's see why . Note that by definition for an element to lie in , we need . An argument similar to the ones we used to compute normalizers and centralizers in shows that given , we have . It follows that for all if and only if . Thus .  Having proved that , the first isomorphism tells us that , and in particular . Since , we conclude that , and hence that , as claimed.   "
},
{
  "id": "eg_first_isom_matrices",
  "level": "2",
  "url": "s_isom_thms_A.html#eg_first_isom_matrices",
  "type": "Example",
  "number": "1.110",
  "title": "First isomorphism theorem: <span class=\"process-math\">\\(\\SL_n(R)\\)<\/span>.",
  "body": " First isomorphism theorem:   Let be one of our familiar rings: , or for some positive integer . Fix a positive integer and define . Show that is normal in and identify the quotient with a familiar group.    The determinant map is a group homomorphism, and it is easy to see that it is surjective: given the diagonal matrix with in the first diagonal entry and 1's elsewhere satisfies .  By definition we have . It follows that and we have by the first isomorphism theorem.   "
},
{
  "id": "eg_first_isom_RmodZ",
  "level": "2",
  "url": "s_isom_thms_A.html#eg_first_isom_RmodZ",
  "type": "Example",
  "number": "1.111",
  "title": "First isomorphism theorem: <span class=\"process-math\">\\(\\R\/\\Z\\)<\/span>.",
  "body": " First isomorphism theorem:   Let , and let    Prove that is a subgroup of and that is a subgroup of .    Prove that .    Prove that .       This example relies on the following notions from complex arithmetic.   Given , with , we define its modulus as . Geometrically, this is just the length of the vector .   Given , if the point has polar coordinates , then we have . Defining , we have . If we specify that , then we have .   Given and , we have . In other words, geomtrically speaking, two multiply two complex numbers, we (a) multiply their moduli, and (b) add their angles.   Using these properties, we see that the map defined as is a group homomorphism with kernel . We leave the details to discussion section.   "
},
{
  "id": "spec_circle_group",
  "level": "2",
  "url": "s_isom_thms_A.html#spec_circle_group",
  "type": "Specimen",
  "number": "12",
  "title": "Circle group and roots of unity.",
  "body": " Circle group and roots of unity   The sets are subgroups of called the circle group and roots of unity of , respectively.   "
},
{
  "id": "s_isom_thms_B",
  "level": "1",
  "url": "s_isom_thms_B.html",
  "type": "Section",
  "number": "1.14",
  "title": "Isomorphism theorems: second and third",
  "body": " Isomorphism theorems: second and third   Product of subgroups   Let and be subgroups of . We define .   We have . In particular, if and are finite, then we have .     is a subgroup of if and only if .    If , then is a subgroup. In particular, if , then is a subgroup of .          Consider the map of sets defined by . This map is surjective by definition of . Given any , we have . Let , and notice that . It follows easily that for all , we have . Furthermore, the map can be shown to be a bijection.  Now, if and are finite, then and are finite, and we have , as desired.  Moreover, if either or is infinite, then so is , in which case the equality still holds.    Left as an exercise.    Left as an exercise.        Second isomorphism theorem   Let and be subgroups of the group and assume .         .       First we prove . Given and , we have .  To prove the stated isomorphism, we start with the quotient map and let , its restriction to the subgroup . We have . By the first isomorphism theorem, we have . It remains to show that . Given any , we have for some and , in which case . It follows that . This proves is surjective, and hence that .     Second isomorphism theorem  The lattice diagram below nicely summarizes the second isomorphism theorem. For this reason, this isomorphism theorem is sometimes called the diamond isomorphism theorem .   Lattice diagram of second isomorhphism theorem   Lattice diagram of second isomorhphism theorem      further tells us that .    Third isomorphism theorem   Let be a surjective homomorphism, and suppose is a normal subgroup of containing .    .     .            Images under quotients  Let be a normal subgroup of . Given any subset , we denote by its image under the quotient map .    Quotients of quotients   Let and be normal subgroups of and assume . We have .    "
},
{
  "id": "prop_subgroup_prod",
  "level": "2",
  "url": "s_isom_thms_B.html#prop_subgroup_prod",
  "type": "Proposition",
  "number": "1.112",
  "title": "Product of subgroups.",
  "body": " Product of subgroups   Let and be subgroups of . We define .   We have . In particular, if and are finite, then we have .     is a subgroup of if and only if .    If , then is a subgroup. In particular, if , then is a subgroup of .          Consider the map of sets defined by . This map is surjective by definition of . Given any , we have . Let , and notice that . It follows easily that for all , we have . Furthermore, the map can be shown to be a bijection.  Now, if and are finite, then and are finite, and we have , as desired.  Moreover, if either or is infinite, then so is , in which case the equality still holds.    Left as an exercise.    Left as an exercise.      "
},
{
  "id": "th_isom_thm_2",
  "level": "2",
  "url": "s_isom_thms_B.html#th_isom_thm_2",
  "type": "Theorem",
  "number": "1.113",
  "title": "Second isomorphism theorem.",
  "body": " Second isomorphism theorem   Let and be subgroups of the group and assume .         .       First we prove . Given and , we have .  To prove the stated isomorphism, we start with the quotient map and let , its restriction to the subgroup . We have . By the first isomorphism theorem, we have . It remains to show that . Given any , we have for some and , in which case . It follows that . This proves is surjective, and hence that .   "
},
{
  "id": "s_isom_thms_B-4",
  "level": "2",
  "url": "s_isom_thms_B.html#s_isom_thms_B-4",
  "type": "Remark",
  "number": "1.114",
  "title": "Second isomorphism theorem.",
  "body": " Second isomorphism theorem  The lattice diagram below nicely summarizes the second isomorphism theorem. For this reason, this isomorphism theorem is sometimes called the diamond isomorphism theorem .   Lattice diagram of second isomorhphism theorem   Lattice diagram of second isomorhphism theorem      further tells us that .  "
},
{
  "id": "th_third_isom",
  "level": "2",
  "url": "s_isom_thms_B.html#th_third_isom",
  "type": "Theorem",
  "number": "1.116",
  "title": "Third isomorphism theorem.",
  "body": " Third isomorphism theorem   Let be a surjective homomorphism, and suppose is a normal subgroup of containing .    .     .          "
},
{
  "id": "s_isom_thms_B-6",
  "level": "2",
  "url": "s_isom_thms_B.html#s_isom_thms_B-6",
  "type": "Notation",
  "number": "1.117",
  "title": "Images under quotients.",
  "body": " Images under quotients  Let be a normal subgroup of . Given any subset , we denote by its image under the quotient map .  "
},
{
  "id": "cor_second_isom_theorem",
  "level": "2",
  "url": "s_isom_thms_B.html#cor_second_isom_theorem",
  "type": "Corollary",
  "number": "1.118",
  "title": "Quotients of quotients.",
  "body": " Quotients of quotients   Let and be normal subgroups of and assume . We have .   "
},
{
  "id": "s_isom_thms_C",
  "level": "1",
  "url": "s_isom_thms_C.html",
  "type": "Section",
  "number": "1.15",
  "title": "Fourth isomorphism theorem",
  "body": " Fourth isomorphism theorem   Fourth isomorphism theorem   Let be a surjective homomorphism, and let . Define . In other words, is the set of all subgroups of containing , and is the set of all subgroups of .   There is a bijective correspondence between and given as follows:   Fourth isomorphism theorem bijection      For , we have             Fourth isomorphism theorem: quotients   Let be a normal subgroup of . The subgroups of are in bijective correspondence with the subgroups of containing . Furthermore, this correspondence preserves normality, inclusion, intersection, generated subgroups, .    "
},
{
  "id": "th_isom_thms_4",
  "level": "2",
  "url": "s_isom_thms_C.html#th_isom_thms_4",
  "type": "Theorem",
  "number": "1.119",
  "title": "Fourth isomorphism theorem.",
  "body": " Fourth isomorphism theorem   Let be a surjective homomorphism, and let . Define . In other words, is the set of all subgroups of containing , and is the set of all subgroups of .   There is a bijective correspondence between and given as follows:   Fourth isomorphism theorem bijection      For , we have           "
},
{
  "id": "cor_4th_isom_thm",
  "level": "2",
  "url": "s_isom_thms_C.html#cor_4th_isom_thm",
  "type": "Corollary",
  "number": "1.120",
  "title": "Fourth isomorphism theorem: quotients.",
  "body": " Fourth isomorphism theorem: quotients   Let be a normal subgroup of . The subgroups of are in bijective correspondence with the subgroups of containing . Furthermore, this correspondence preserves normality, inclusion, intersection, generated subgroups, .   "
},
{
  "id": "s_alt_group",
  "level": "1",
  "url": "s_alt_group.html",
  "type": "Section",
  "number": "1.16",
  "title": "Alternating subgroup",
  "body": " Alternating subgroup   Transposition   Let be a finite set of cardinality at least 2. A -cycle is called a transposition of .     Transpositions generate   Let be a finite set of cardinality at least 2.   Given -cycle , we have .    Let be the set of transpositions of . We have : , is generated by its transpositions.          This is a straightforward proof by induction, the base case being trivial. For the induction step, assume any -cycle can be written as in . Given any -cycle , we have , as desired.    From (1) we see that contains all cycles. Since any permutation can be written as a product of (disjoint) cycles, it follows that .       The {\\em alternating subgroup} of is defined as the set of all {\\em even permutations}, which are defined as the permutations that can be written as a product of an even number of transpositions. We hasten to acknowledge that this definition is highly suspect, since it is not in the least obvious that if a permutation can be written as an even number of transpositions, then it cannot be written as an odd number of transpositions! We will justify the definition at the end of the section after looking at some concrete examples.   Even and odd permutations    the sign map    Let be a finite set of cardinality at least 2. A permutation is called even if it can be written as a product of an even number of transpositions, and odd if it can be written as an odd product of transpositions. Two permutations have the same parity if they are both even or both odd.  We define the sign map as Equivalently, if can be written as a product of transpositions, then .     Sign of permutations   From , we see that any -cycle can be written as a product of transpositions. It follows that a -cycle is even if and only if is odd.  What about the identity permutation ? Since for any -cycle, we see that is even.     Sign map   Let be a set of cardinality at least 2. The sign map is a surjective homomorphism.    The proof is straightforward, assuming of course that our definition of even\/odd is well defined! Indeed, if can be written as a product of traspositions, and can be written as a product of transpositions, then can be written as a product of transpositions, and thus . Surjectivity is clear since and for any transposition .     Alternating subgroup   Let be a finite set of cardinality at least 2. The alternating subgroup of , denoted , is defined as the kernel of : , . Since is a surjective homomorphism, it follows from the first isomorphism theorem that and .       Compute the full lattice of subgroups of and identify any normal subgroups.    Let's first describe all elements of . Below we look at all cycle types of elements in , determine their parity, and count the number of elements of that cycle type. . If is a subgroup of , then since , we have . There are cardinality-2 subgroups generated by the elements of the form . There are exactly cyclic subgroups of cardinality : one for each pair . Furthermore, as we have seen before, we have , a cardinality-4 subgroup isomorphic to the Klein 4-group. Since conjugation preserves cycle type, and since this subgroup contains all elements of type , it is easy to see that it is normal. This gives rise to the the lattice of subgroups in . We claim that this is the complete lattice of subgroups. It suffices to argue that any subgroup of containing an element of the form and an element of the form must be all of . It is not difficult to show this just by computing some products of elements of order 2 and 3. Below you find a slightly slicker argument.  Suppose we had a subgroup containing $H=\\angvec{(12)(34)}$ and . It would follow that . Since and , we have and thus . But then we must have , in which case is normal in since . Since all elements of type are conjugate in (as one can easily verify), we'd have . This is a contradiction, since . Thus there is no such .     Lattice of subgroups of   Lattice of subgroups of A4     We now set about proving that our definition of the parity of a permutation is well defined. There are many ways of doing this. The text uses an argument based on the discriminant polynomial and the observation that given any , we have . We will pursue a completely different line of thought, thereby supplementing the book's nice proof, with another one. Our approach has the added advantage of making uses of an interesting group homomorphism . Moreover, our argument gives us the opportunity of introducing another important subgroug of the general linear group, called the orthogonal group.   Orthogonal group   Let be a positive integer. The orthogonal subgroup of ,denoted , is defined as the set of satisfying : , . We leave as an exercise the fact that is a subgroup of , and hence a group in its own right.     Permutation group representation   Let be an integer. For all , let be the -tuple whose -th coordinate is , and whose other coordinates are . Given , we define to be the unique matrix in satisfying for all .   The map defines a group homomorphism .    The composition defines a surjective group homomorphism .    We have if and only if can be written as a product of an even number of transpositions. As a result, is well defined.       The proof is left as an exercise.     Parity  At last, thanks to , we see that our definition of parity is well defined. But wait, you might object, applies only to , not a general permutatio group . Of course, the easy way to get around this is to choose an isomorphism from to that sends transpositions to transpositions (the isomorphism in does this), and compose this with .  There is another way of seeing this, however. Namely, tells us that has a normal subgroup of index 2, and hence so does and , where . In fact, it is possible to show that has exactly one such subgroup, and it is made up precisely of the elements of that can be written as a product of an even number of transpositions. We leave this fact as an exercise.   "
},
{
  "id": "d_transposition",
  "level": "2",
  "url": "s_alt_group.html#d_transposition",
  "type": "Definition",
  "number": "1.121",
  "title": "Transposition.",
  "body": " Transposition   Let be a finite set of cardinality at least 2. A -cycle is called a transposition of .   "
},
{
  "id": "th_transp_generate",
  "level": "2",
  "url": "s_alt_group.html#th_transp_generate",
  "type": "Theorem",
  "number": "1.122",
  "title": "Transpositions generate <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": " Transpositions generate   Let be a finite set of cardinality at least 2.   Given -cycle , we have .    Let be the set of transpositions of . We have : , is generated by its transpositions.          This is a straightforward proof by induction, the base case being trivial. For the induction step, assume any -cycle can be written as in . Given any -cycle , we have , as desired.    From (1) we see that contains all cycles. Since any permutation can be written as a product of (disjoint) cycles, it follows that .      "
},
{
  "id": "d_even_odd",
  "level": "2",
  "url": "s_alt_group.html#d_even_odd",
  "type": "Definition",
  "number": "1.123",
  "title": "Even and odd permutations.",
  "body": " Even and odd permutations    the sign map    Let be a finite set of cardinality at least 2. A permutation is called even if it can be written as a product of an even number of transpositions, and odd if it can be written as an odd product of transpositions. Two permutations have the same parity if they are both even or both odd.  We define the sign map as Equivalently, if can be written as a product of transpositions, then .   "
},
{
  "id": "eg_sign",
  "level": "2",
  "url": "s_alt_group.html#eg_sign",
  "type": "Example",
  "number": "1.124",
  "title": "Sign of permutations.",
  "body": " Sign of permutations   From , we see that any -cycle can be written as a product of transpositions. It follows that a -cycle is even if and only if is odd.  What about the identity permutation ? Since for any -cycle, we see that is even.   "
},
{
  "id": "prop_sign",
  "level": "2",
  "url": "s_alt_group.html#prop_sign",
  "type": "Proposition",
  "number": "1.125",
  "title": "Sign map.",
  "body": " Sign map   Let be a set of cardinality at least 2. The sign map is a surjective homomorphism.    The proof is straightforward, assuming of course that our definition of even\/odd is well defined! Indeed, if can be written as a product of traspositions, and can be written as a product of transpositions, then can be written as a product of transpositions, and thus . Surjectivity is clear since and for any transposition .   "
},
{
  "id": "spec_alternating",
  "level": "2",
  "url": "s_alt_group.html#spec_alternating",
  "type": "Specimen",
  "number": "13",
  "title": "Alternating subgroup.",
  "body": " Alternating subgroup   Let be a finite set of cardinality at least 2. The alternating subgroup of , denoted , is defined as the kernel of : , . Since is a surjective homomorphism, it follows from the first isomorphism theorem that and .   "
},
{
  "id": "eg_A4",
  "level": "2",
  "url": "s_alt_group.html#eg_A4",
  "type": "Example",
  "number": "1.126",
  "title": "<span class=\"process-math\">\\(A_4\\)<\/span>.",
  "body": "   Compute the full lattice of subgroups of and identify any normal subgroups.    Let's first describe all elements of . Below we look at all cycle types of elements in , determine their parity, and count the number of elements of that cycle type. . If is a subgroup of , then since , we have . There are cardinality-2 subgroups generated by the elements of the form . There are exactly cyclic subgroups of cardinality : one for each pair . Furthermore, as we have seen before, we have , a cardinality-4 subgroup isomorphic to the Klein 4-group. Since conjugation preserves cycle type, and since this subgroup contains all elements of type , it is easy to see that it is normal. This gives rise to the the lattice of subgroups in . We claim that this is the complete lattice of subgroups. It suffices to argue that any subgroup of containing an element of the form and an element of the form must be all of . It is not difficult to show this just by computing some products of elements of order 2 and 3. Below you find a slightly slicker argument.  Suppose we had a subgroup containing $H=\\angvec{(12)(34)}$ and . It would follow that . Since and , we have and thus . But then we must have , in which case is normal in since . Since all elements of type are conjugate in (as one can easily verify), we'd have . This is a contradiction, since . Thus there is no such .   "
},
{
  "id": "fig_A4",
  "level": "2",
  "url": "s_alt_group.html#fig_A4",
  "type": "Figure",
  "number": "1.127",
  "title": "",
  "body": " Lattice of subgroups of   Lattice of subgroups of A4    "
},
{
  "id": "s_alt_group-11",
  "level": "2",
  "url": "s_alt_group.html#s_alt_group-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "spec_ortho_group",
  "level": "2",
  "url": "s_alt_group.html#spec_ortho_group",
  "type": "Specimen",
  "number": "14",
  "title": "Orthogonal group.",
  "body": " Orthogonal group   Let be a positive integer. The orthogonal subgroup of ,denoted , is defined as the set of satisfying : , . We leave as an exercise the fact that is a subgroup of , and hence a group in its own right.   "
},
{
  "id": "th_permutation_rep",
  "level": "2",
  "url": "s_alt_group.html#th_permutation_rep",
  "type": "Theorem",
  "number": "1.128",
  "title": "Permutation group representation.",
  "body": " Permutation group representation   Let be an integer. For all , let be the -tuple whose -th coordinate is , and whose other coordinates are . Given , we define to be the unique matrix in satisfying for all .   The map defines a group homomorphism .    The composition defines a surjective group homomorphism .    We have if and only if can be written as a product of an even number of transpositions. As a result, is well defined.       The proof is left as an exercise.   "
},
{
  "id": "s_alt_group-14",
  "level": "2",
  "url": "s_alt_group.html#s_alt_group-14",
  "type": "Remark",
  "number": "1.129",
  "title": "Parity.",
  "body": " Parity  At last, thanks to , we see that our definition of parity is well defined. But wait, you might object, applies only to , not a general permutatio group . Of course, the easy way to get around this is to choose an isomorphism from to that sends transpositions to transpositions (the isomorphism in does this), and compose this with .  There is another way of seeing this, however. Namely, tells us that has a normal subgroup of index 2, and hence so does and , where . In fact, it is possible to show that has exactly one such subgroup, and it is made up precisely of the elements of that can be written as a product of an even number of transpositions. We leave this fact as an exercise.  "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-specs",
  "level": "1",
  "url": "appendix-specs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Specimens",
  "body": " Specimens   "
},
{
  "id": "appendix-vids",
  "level": "1",
  "url": "appendix-vids.html",
  "type": "Appendix",
  "number": "F",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
