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
  "body": " Groups   This first quarter of Math 331 is devoted entirely to the study of groups. This a fitting place to begin both as groups represent a type of algebraic object with near minimal structure and are omnipresent in the world of mathematics and the empirical sciences more generally. More conceptually, groups are intimately connected with the notion of symmetry in mathematics. Put plainly, wherever you find mathematical discussion of symmetry, a group usually lurks in the background as the thing that defines that symmetry. We will see plenty of examples of this in the coming days. In the meantime, for an excellent elaboration of this theme, check out Keith Conrad's blurb Why groups?     Definition   Groups   A group is an ordered pair where is a nonempty set and is a binary operation , satisfying the following axioms.   Associativity  For all we have .    Group identity  There is an element , such that for all , we have . We call the group identity of .    Group inverses  For all there is an element satisfying . We call the group inverse of .        Group law notation   You are free to denote the binary group law in any manner you like. Often, as in , we will make a notational choice that reflects the specific nature of a given group.  Furthermore, with the exception of the case where is used to denote the group law, we will often omit the group operation symbol when writing expressions involving group elements.     Ring additive groups   Let , and let be the usual addition operation on . The pair is a group, called the additive group of .  The group identity of is , also known as the additive identity of .  Given any , its group inverse is its minus, , also known as the additive inverse  .     Ring multiplicative groups   Let . An element is a unit (or (multiplicatively) invertible if there is an element satisfying . In this case is called the multiplicative inverse of . Define to be the set of all units of : , . If , then , since in these number systems all nonzero elements have a multiplicative inverse. By contrast, we have , since and are the only integers that have an integer multiplicative inverse.  The , where is the usual multiplciation operation on , is a group called the multiplicative group of .  The group identity of is , also known as the multiplicative identity of .  Given any , its group inverse is the multiplicative inverse defined above.     Abelian group   A group is abelian (or commutative ) if for all . The group is nonabelian (or noncommutative ), if it is not abelian.     General linear group  Let . The set of all matrices with coefficients in is denoted . We denote by the set of invertible matrices with coefficients in : , is denoted : , . The pair , where is the usual matrix multiplication operation, is a group called the general linear group of degree over .  The group identity of is the identity matrix .  Given any , its group inverse is the matrix inverse .    is nonabelian   Let and let . Prove that is a nonabelian group.    Let . We have (easy determinant computation), and furthermore . Since , we conclude that is nonabelian.  Next, given any , consider the block matrices , where and are the matrices above. From properties of block matrix arithmetic it follows that and are invertible (in fact, ) and . Since , we conclude that is nonabelian, as desired.      Elementary properties   Group properties   Let be a group.   Cancellation laws  Let .    if and only if .     if and only if .       Uniqueness of identity  The identity element of is unique: , there is exactly one element satisfying .    Uniqueness of inverse  Every has a unique inverse element: , for each there is exactly one element satisfying .     for all .    Inverse of product   for all .    Generalized associativity  Any two parenthetical groupings of an -tuple give rise to the same product in , which we denote as . For example, we have for any , and we denote this common element .            Group exponentiation   Let be a group. Given and , the -th power of , denoted is defined via cases as follows.        Given positive integer , we define .        Group element order   Let be an element of the group . The order of , denoted is defined as follows.   If there is no positive integer , such that , then has infinite order , denoted .    If there is a positive integer such that , then is defined as the smallest positive integer satisfying .        Order of inverse   Let be an element of the group . Prove: .     Element of infinite order   Assume is an element of the group of infinite order. Prove that the elements , , are all distinct.     "
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
  "id": "th_group_props",
  "level": "2",
  "url": "s_groups.html#th_group_props",
  "type": "Proposition",
  "number": "1.5",
  "title": "Group properties.",
  "body": " Group properties   Let be a group.   Cancellation laws  Let .    if and only if .     if and only if .       Uniqueness of identity  The identity element of is unique: , there is exactly one element satisfying .    Uniqueness of inverse  Every has a unique inverse element: , for each there is exactly one element satisfying .     for all .    Inverse of product   for all .    Generalized associativity  Any two parenthetical groupings of an -tuple give rise to the same product in , which we denote as . For example, we have for any , and we denote this common element .          "
},
{
  "id": "d_group_exp",
  "level": "2",
  "url": "s_groups.html#d_group_exp",
  "type": "Definition",
  "number": "1.6",
  "title": "Group exponentiation.",
  "body": " Group exponentiation   Let be a group. Given and , the -th power of , denoted is defined via cases as follows.        Given positive integer , we define .      "
},
{
  "id": "d_order_group_element",
  "level": "2",
  "url": "s_groups.html#d_order_group_element",
  "type": "Definition",
  "number": "1.7",
  "title": "Group element order.",
  "body": " Group element order   Let be an element of the group . The order of , denoted is defined as follows.   If there is no positive integer , such that , then has infinite order , denoted .    If there is a positive integer such that , then is defined as the smallest positive integer satisfying .      "
},
{
  "id": "eg_order_inverse",
  "level": "2",
  "url": "s_groups.html#eg_order_inverse",
  "type": "Example",
  "number": "1.8",
  "title": "Order of inverse.",
  "body": " Order of inverse   Let be an element of the group . Prove: .   "
},
{
  "id": "eg_infinite_order",
  "level": "2",
  "url": "s_groups.html#eg_infinite_order",
  "type": "Example",
  "number": "1.9",
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
  "number": "1.10",
  "title": "Divisibilty.",
  "body": " Divisibilty    divides    Given integers we say that  divides  (or that is a multiple of ) if there is an integer satisfying . In this case, is called the quotient of by .   "
},
{
  "id": "d_cong_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#d_cong_mod_n",
  "type": "Definition",
  "number": "1.11",
  "title": "Congruence modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Congruence modulo    is congruent to modulo     the congruence class of modulo    Let be a positive integer. Integers and are congruent modulo , denoted , if one of the two following equivalent conditions holds: . The congruence class (or residue class ) of modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .   "
},
{
  "id": "eg_cong_mod_3",
  "level": "2",
  "url": "s_mod_rings.html#eg_cong_mod_3",
  "type": "Example",
  "number": "1.12",
  "title": "Congruence modulo <span class=\"process-math\">\\(3\\)<\/span>.",
  "body": " Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .      "
},
{
  "id": "ss_cong-5",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-5",
  "type": "Remark",
  "number": "1.13",
  "title": "Congruence classes.",
  "body": " Congruence classes  Fix an integer . The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.  "
},
{
  "id": "th_cong_class",
  "level": "2",
  "url": "s_mod_rings.html#th_cong_class",
  "type": "Theorem",
  "number": "1.14",
  "title": "Congruence.",
  "body": " Congruence   Fix a modulus .   The congruence modulo relation is an equivalence relation: ,   Reflexivity   for all .    Reflexivity  If , then .    Transitivity  If and , then .       The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of : , we have , and if , then . Using logical notation: .    Assume is positive. For every , there is a unique such that . Equivalently, and for all . As a consequence, .       See text for (1). Statements (2)-(3) then follow from general properties about equivalence relations and their corresponding equivalence classes. Statement (4) follows from (2) and the following observation: .   "
},
{
  "id": "d_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#d_least_residue",
  "type": "Definition",
  "number": "1.15",
  "title": "Least residue modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .   "
},
{
  "id": "ss_cong-8",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-8",
  "type": "Warning",
  "number": "1.16",
  "title": "Congruence relation and least residues.",
  "body": " Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .  "
},
{
  "id": "th_div_alg",
  "level": "2",
  "url": "s_mod_rings.html#th_div_alg",
  "type": "Theorem",
  "number": "1.17",
  "title": "Division algorithm.",
  "body": " Division algorithm   Given any integer with nonzero, there is a unique pair of integers satisfying the following properties:    ;     .   We call the integers and satisfying these properties the quotient and remainder upon dividing by .   "
},
{
  "id": "prop_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#prop_least_residue",
  "type": "Proposition",
  "number": "1.18",
  "title": "Least residue.",
  "body": " Least residue   Let be a positive integer, and let . The following statements are equivalent.    .     and .     is the remainder upon division of by .      "
},
{
  "id": "prop_cong_arith",
  "level": "2",
  "url": "s_mod_rings.html#prop_cong_arith",
  "type": "Proposition",
  "number": "1.19",
  "title": "Modular arithmetic.",
  "body": " Modular arithmetic   Fix a modulus . Assume integers satisfy . We have . It follows from this that .   "
},
{
  "id": "cor_mod_ring_ops",
  "level": "2",
  "url": "s_mod_rings.html#cor_mod_ring_ops",
  "type": "Corollary",
  "number": "1.20",
  "title": "Ring structure of <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Ring structure of   Fix a modulus . We have well-defined binary operations and defined on as follows: .   "
},
{
  "id": "eg_mod_arith",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_arith",
  "type": "Example",
  "number": "1.21",
  "title": "Modular arithmetic.",
  "body": " Modular arithmetic   Fix the modulus . Find a representative for the congruence class .       "
},
{
  "id": "eg_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#eg_least_residue",
  "type": "Example",
  "number": "1.22",
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
  "number": "1.23",
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
  "number": "1.24",
  "title": "Modulus <span class=\"process-math\">\\(n=5\\)<\/span>.",
  "body": " Modulus   Compute group tables for both and . Naturally, for the latter you should first determine the units of .       "
},
{
  "id": "eg_mod_units",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_units",
  "type": "Example",
  "number": "1.25",
  "title": "Units modulo <span class=\"process-math\">\\(9\\)<\/span>.",
  "body": " Units modulo   Compute a group table for .       "
},
{
  "id": "d_gcd",
  "level": "2",
  "url": "s_mod_rings.html#d_gcd",
  "type": "Definition",
  "number": "1.26",
  "title": "Greatest common divisor.",
  "body": " Greatest common divisor   Let and be integers, at least one of which is nonzero. The greatest common divisor of and , denoted , is the greatest positive integer dividing both and : , .   "
},
{
  "id": "ss_cong_ring_structure-12",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong_ring_structure-12",
  "type": "Remark",
  "number": "1.27",
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
  "body": " Matrix groups   Invertible matix   Assume either that or that for some . Fix a positive integer . The set of all matrices with coefficients in is denoted .  Given matrices we define their product to be the matrix , where for all .  A matrix is invertible if there is a matrix such that , where is the identity matrix.  We denote by the set of all invertible matrices with coefficients in : , .     General linear group (generalized)   Assume either that or that for some . Given a positive integer , the pair is a group, where is matrix multiplication in .     Invertible matrices and determinant  It turns out that matrix algebra in proceeds essentialy exactly as you are accustomed to, no matter how exotic our ring is. In particular, we can define a determinant function using the usual formula, since has notions of addition and multiplication. Furthermore, you can show that as usual satisfies for all , and that for all there is a special matrix called the adjoint matrix of that satisfies . From these observations it follows that , where is the group of units of , as defined in and .  Of course, that these properties of the determinant and adjoint matrix hold very much requires a proof. We will not do that here, as these will not play a fundamental role in the current course beyond making computation within these groups more convenient. However, the ring theory developed in Math 331-2 will provide a powerful general method that allows us to conclude that properties enjoyed by mathematical objects defined over  and are sometimes inherited by the same types of objects defined over a more general .      Consider the group .   Compute by explicitly enumerating all of its elements. You can use and to denote the congruence classes .    Compute for all .    Find such that .    For your choice of above, express as as in .    Use the above to construct a full multiplication table of in terms of and .       Since , we see that to be invertible, we need . This restriction allows us to easily enumerate the invertible matrices as . The matrices named and above satisfy . Thus . Furthermore, we see that . The three relations then easily allow us to compute with the group law: that is as long as we express elements of the group in the form . For example, we have . Computations like this allow us to easily compute orders of elements: . We leave it to you to compute the entire multiplication table of . A good exercise!     Isometry   Fix a positive integer . Let denote the standard Euclidean distance on : , , for all -tuples and . An isometry (or rigid motion ) of with respect to is a function satisfying for all . We denote by the set of all isometries of .    "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_matrix_grps.html#d_invertible_matrix",
  "type": "Definition",
  "number": "1.28",
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
  "number": "1.29",
  "title": "Invertible matrices and determinant.",
  "body": " Invertible matrices and determinant  It turns out that matrix algebra in proceeds essentialy exactly as you are accustomed to, no matter how exotic our ring is. In particular, we can define a determinant function using the usual formula, since has notions of addition and multiplication. Furthermore, you can show that as usual satisfies for all , and that for all there is a special matrix called the adjoint matrix of that satisfies . From these observations it follows that , where is the group of units of , as defined in and .  Of course, that these properties of the determinant and adjoint matrix hold very much requires a proof. We will not do that here, as these will not play a fundamental role in the current course beyond making computation within these groups more convenient. However, the ring theory developed in Math 331-2 will provide a powerful general method that allows us to conclude that properties enjoyed by mathematical objects defined over  and are sometimes inherited by the same types of objects defined over a more general .  "
},
{
  "id": "eg_GL_mod2",
  "level": "2",
  "url": "s_matrix_grps.html#eg_GL_mod2",
  "type": "Example",
  "number": "1.30",
  "title": "<span class=\"process-math\">\\(\\GL_2(\\Z\/2\\Z)\\)<\/span>.",
  "body": "   Consider the group .   Compute by explicitly enumerating all of its elements. You can use and to denote the congruence classes .    Compute for all .    Find such that .    For your choice of above, express as as in .    Use the above to construct a full multiplication table of in terms of and .       Since , we see that to be invertible, we need . This restriction allows us to easily enumerate the invertible matrices as . The matrices named and above satisfy . Thus . Furthermore, we see that . The three relations then easily allow us to compute with the group law: that is as long as we express elements of the group in the form . For example, we have . Computations like this allow us to easily compute orders of elements: . We leave it to you to compute the entire multiplication table of . A good exercise!   "
},
{
  "id": "d_isom",
  "level": "2",
  "url": "s_matrix_grps.html#d_isom",
  "type": "Definition",
  "number": "1.31",
  "title": "Isometry.",
  "body": " Isometry   Fix a positive integer . Let denote the standard Euclidean distance on : , , for all -tuples and . An isometry (or rigid motion ) of with respect to is a function satisfying for all . We denote by the set of all isometries of .   "
},
{
  "id": "s_dihedral",
  "level": "1",
  "url": "s_dihedral.html",
  "type": "Section",
  "number": "1.4",
  "title": "Dihedral groups",
  "body": " Dihedral groups   Isometries of   Group of isometries   Fix a positive integer . The pair is a group, where is function composition.     Isometries   Fix a postive integer . Investigate the claim that is a group with respect to composition. In more detail:   Explain why the group operation is well defined.    What is the group identity of this group, and what are the group inverses?    There is a nontrivial detail in the last part that requires proof. What is it?            Rigid motions of  Rotations about a point, reflections through a line, and translation by a fixed vector are easily seen to be examples of rigid motions of the plane. Furthermore, it can be shown that a rigid motion that maps the origin to itself is a linear transformation, that itself is either rotation about or reflection through a line passing through . It follows from this that any rigid motion has a formula of the form , where is a rotation or reflection matrix, and is a fixed vector in .     Dihedral groups   Dihedral groups    the dihedral group of cardinality    Fix an integer . Let be the regular -gon centered at the origin with one vertex at . We define to be the set of rigid motions of that map onto itself: , . Function composition defines a binary operation . The pair is a group, called the dihedral group of cardinality .  The group identity of is the identity function . Given an element , its group inverse is its function inverse .     or  What we call the book calls ! This is somewhat unfortunate, but it turns out there is no real consensus in the mathematical community as to which is the preferred notation. As we see below, the subscript has the advantage of indicating the cardinality of the group in question. On the other hand, the subscript reminds us that the group is defined in terms of isometries that fix an -gon. The latter is consistent with our notation for permutation groups (to be introduced soon), which are defined as the group of permutations acting on a set of elements. That fact, along with the fact that I was simply raised on and not has persuaded me to part ways with the text in this case.    Dihedral group   Fix an integer , let be the regular -gon centered at the origin with one vertex at , and let be the corresponding dihedral group.  Furthermore, define to be rotation by about the origin, and define to be reflection across the -axis.   We have and .    The elements and satisfy .    More generally, we have .            Computing in   Fix . Visualize the elements of as follows.   Draw the equilateral triangle as described in .    For each element , where and are defined as in , give an explicit geometric description of this rigid motion.    Compute a group table for .            Dihedral geometry   Fix an integer , and let be as defined in .   Give a precise geometric description of each rigid motion .    Let for any . Prove that and that satisfies . In other words, in the description of given in , we can replace the reflection with any of the reflections .             Group presentations  As we saw above, the relations together with the fact that are essentially all we need to know to be able to do computations in the dihedral group . Group presentation notation gives us a nice way of summarizing this defining properties. A group presentation of is . Although we introduce the notation here as a convenient way to summarize how an established group, namely , is generated by the elements and , the notation can also be used to construct groups from scratch. Put another way, any presentation like the one above can be shown to be the presentation of an actual existing group. For example, the presentation can be shown to be the define a certain group of cardinality . As it turns out, to make good sense of this construction, a significant amount of theory must be mobilized. As such, we will be careful to confine ourselves to using the presentation notation only to as a summary description of a group we know already to exist. The quaternion group below is a good example of this.   Quaternion group    the quaternion group    Let . The following rules define a binary operation on . . The pair is a group called the quaternion group . We have the following presentation of : .     "
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
  "number": "1.32",
  "title": "Isometries.",
  "body": " Isometries   Fix a postive integer . Investigate the claim that is a group with respect to composition. In more detail:   Explain why the group operation is well defined.    What is the group identity of this group, and what are the group inverses?    There is a nontrivial detail in the last part that requires proof. What is it?          "
},
{
  "id": "ss_isometries-4",
  "level": "2",
  "url": "s_dihedral.html#ss_isometries-4",
  "type": "Remark",
  "number": "1.33",
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
  "number": "1.34",
  "title": "<span class=\"process-math\">\\(D_n\\)<\/span> or <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": " or  What we call the book calls ! This is somewhat unfortunate, but it turns out there is no real consensus in the mathematical community as to which is the preferred notation. As we see below, the subscript has the advantage of indicating the cardinality of the group in question. On the other hand, the subscript reminds us that the group is defined in terms of isometries that fix an -gon. The latter is consistent with our notation for permutation groups (to be introduced soon), which are defined as the group of permutations acting on a set of elements. That fact, along with the fact that I was simply raised on and not has persuaded me to part ways with the text in this case.  "
},
{
  "id": "th_dihedral",
  "level": "2",
  "url": "s_dihedral.html#th_dihedral",
  "type": "Theorem",
  "number": "1.35",
  "title": "Dihedral group.",
  "body": " Dihedral group   Fix an integer , let be the regular -gon centered at the origin with one vertex at , and let be the corresponding dihedral group.  Furthermore, define to be rotation by about the origin, and define to be reflection across the -axis.   We have and .    The elements and satisfy .    More generally, we have .          "
},
{
  "id": "eg_D3",
  "level": "2",
  "url": "s_dihedral.html#eg_D3",
  "type": "Example",
  "number": "1.36",
  "title": "Computing in <span class=\"process-math\">\\(D_3\\)<\/span>.",
  "body": " Computing in   Fix . Visualize the elements of as follows.   Draw the equilateral triangle as described in .    For each element , where and are defined as in , give an explicit geometric description of this rigid motion.    Compute a group table for .          "
},
{
  "id": "eg_dihedral_geom",
  "level": "2",
  "url": "s_dihedral.html#eg_dihedral_geom",
  "type": "Example",
  "number": "1.37",
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
