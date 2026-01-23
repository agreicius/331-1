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
  "body": " Matrix groups   Invertible matrix    matrices with coefficients in     the group of invertible matrices with coefficients in    Assume either that or that for some . Fix a positive integer . The set of all matrices with coefficients in is denoted .  Given matrices we define their product to be the matrix , where for all .  A matrix is invertible if there is a matrix such that , where is the identity matrix.  We denote by the set of all invertible matrices with coefficients in : , .     General linear group (generalized)   Assume either that or that for some . Given a positive integer , the pair is a group, where is matrix multiplication in .     Invertible matrices and determinant  It turns out that matrix algebra in proceeds essentialy exactly as you are accustomed to, no matter how exotic our ring is. In particular, we can define a determinant function using the usual formula, since has notions of addition and multiplication. Furthermore, you can show that as usual satisfies for all , and that for all there is a special matrix called the adjoint matrix of that satisfies . From these observations it follows that , where is the group of units of , as defined in and .  Of course, that these properties of the determinant and adjoint matrix hold very much requires a proof. We will not do that here, as these will not play a fundamental role in the current course beyond making computation within these groups more convenient. However, the ring theory developed in Math 331-2 will provide a powerful general method that allows us to conclude that properties enjoyed by mathematical objects defined over  and are sometimes inherited by the same types of objects defined over a more general .      Consider the group .   Compute by explicitly enumerating all of its elements. You can use and to denote the congruence classes .    Compute for all .    Find such that .    For your choice of above, express as as in .    Use the above to construct a full multiplication table of in terms of and .       Since , we see that to be invertible, we need . This restriction allows us to easily enumerate the invertible matrices as . The matrices named and above satisfy . Thus . Furthermore, we see that . The three relations then easily allow us to compute with the group law: that is as long as we express elements of the group in the form . For example, we have . Computations like this allow us to easily compute orders of elements: . We leave it to you to compute the entire multiplication table of . A good exercise!    "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_matrix_grps.html#d_invertible_matrix",
  "type": "Definition",
  "number": "1.31",
  "title": "Invertible matrix.",
  "body": " Invertible matrix    matrices with coefficients in     the group of invertible matrices with coefficients in    Assume either that or that for some . Fix a positive integer . The set of all matrices with coefficients in is denoted .  Given matrices we define their product to be the matrix , where for all .  A matrix is invertible if there is a matrix such that , where is the identity matrix.  We denote by the set of all invertible matrices with coefficients in : , .   "
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
  "body": " Dihedral groups   Isometries of   Isometry    isometries of    Fix a positive integer . Let denote the standard Euclidean distance on : , , for all -tuples and . An isometry (or rigid motion ) of with respect to is a function satisfying for all . We denote by the set of all isometries of .     Group of isometries   Fix a positive integer . The pair is a group, where is function composition.     Isometries   Fix a positive integer . Investigate the claim that is a group with respect to composition. In more detail:   Explain why the group operation is well defined.    What is the group identity of this group, and what are the group inverses?    There is a nontrivial detail in the last part that requires proof. What is it?            Rigid motions of  Rotations about a point, reflections through a line, and translation by a fixed vector are easily seen to be examples of rigid motions of the plane. Furthermore, it can be shown that a rigid motion that maps the origin to itself is a linear transformation, that itself is either rotation about or reflection through a line passing through . It follows from this that any rigid motion has a formula of the form , where is a rotation or reflection matrix, and is a fixed vector in .     Dihedral groups   Dihedral groups    the dihedral group of cardinality    Fix an integer . Let be the regular -gon centered at the origin with one vertex at . We define to be the set of rigid motions of that map onto itself: , . Function composition defines a binary operation . The pair is a group, called the dihedral group of cardinality .  The group identity of is the identity function . Given an element , its group inverse is its function inverse .     or  What we call the book calls ! This is somewhat unfortunate, but it turns out there is no real consensus in the mathematical community as to which is the preferred notation. As we see below, the subscript has the advantage of indicating the cardinality of the group in question. On the other hand, the subscript reminds us that the group is defined in terms of isometries that fix an -gon. The latter is consistent with our notation for permutation groups (to be introduced soon), which are defined as the group of permutations acting on a set of elements. That fact, along with the fact that I was simply raised on and not has persuaded me to part ways with the text in this case.    Dihedral group   Fix an integer , let be the regular -gon centered at the origin with one vertex at , and let be the corresponding dihedral group.  Furthermore, define to be rotation by about the origin, and define to be reflection across the -axis.   We have and .    The elements and satisfy .            Computing in   Fix . Visualize the elements of as follows.   Draw the equilateral triangle as described in .    For each element , where and are defined as in , give an explicit geometric description of this rigid motion.    Compute a group table for .            Dihedral geometry   Fix an integer , and let be as defined in .   Give a precise geometric description of each rigid motion .    Let for any . Prove that and that satisfies . In other words, in the description of given in , we can replace the reflection with any of the reflections .             Group presentations  As we saw above, the relations together with the fact that are essentially all we need to know to be able to do computations in the dihedral group . Group presentation notation gives us a nice way of summarizing this defining properties. A group presentation of is . Although we introduce the notation here as a convenient way to summarize how an established group, namely , is generated by the elements and , the notation can also be used to construct groups from scratch. Put another way, any presentation like the one above can be shown to be the presentation of an actual existing group. For example, the presentation can be shown to be the define a certain group of cardinality . As it turns out, to make good sense of this construction, a significant amount of theory must be mobilized. As such, we will be careful to confine ourselves to using the presentation notation only to as a summary description of a group we know already to exist. The quaternion group below is a good example of this.   Quaternion group    the quaternion group    Let . The following rules define a binary operation on . . The pair is a group called the quaternion group . We have the following presentation of : .     "
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
  "body": " Dihedral group   Fix an integer , let be the regular -gon centered at the origin with one vertex at , and let be the corresponding dihedral group.  Furthermore, define to be rotation by about the origin, and define to be reflection across the -axis.   We have and .    The elements and satisfy .          "
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
  "body": " Alternating subgroup   Transposition   Let be a finite set of cardinality at least 2. A -cycle is called a transposition of .     Transpositions generate   Let be a finite set of cardinality at least 2.   Given -cycle , we have .    Let be the set of transpositions of . We have : , is generated by its transpositions.          This is a straightforward proof by induction, the base case being trivial. For the induction step, assume any -cycle can be written as in . Given any -cycle , we have , as desired.    From (1) we see that contains all cycles. Since any permutation can be written as a product of (disjoint) cycles, it follows that .       The {\\em alternating subgroup} of is defined as the set of all {\\em even permutations}, which are defined as the permutations that can be written as a product of an even number of transpositions. We hasten to acknowledge that this definition is highly suspect, since it is not in the least obvious that if a permutation can be written as an even number of transpositions, then it cannot be written as an odd number of transpositions! We will justify the definition at the end of the section after looking at some concrete examples.   Even and odd permutations    the sign map    Let be a finite set of cardinality at least 2. A permutation is called even if it can be written as a product of an even number of transpositions, and odd if it can be written as an odd product of transpositions. Two permutations have the same parity if they are both even or both odd.  We define the sign map as Equivalently, if can be written as a product of transpositions, then .     Sign of permutations   From , we see that any -cycle can be written as a product of transpositions. It follows that a -cycle is even if and only if is odd.  What about the identity permutation ? Since for any -cycle, we see that is even.     Sign map   Let be a set of cardinality at least 2. The sign map is a surjective homomorphism.    The proof is straightforward, assuming of course that our definition of even\/odd is well defined! Indeed, if can be written as a product of traspositions, and can be written as a product of transpositions, then can be written as a product of transpositions, and thus . Surjectivity is clear since and for any transposition .     Alternating subgroup   Let be a finite set of cardinality at least 2. The alternating subgroup of , denoted , is defined as the kernel of : , . Since is a surjective homomorphism, it follows from the first isomorphism theorem that and .       Compute the full lattice of subgroups of and identify any normal subgroups.    Let's first describe all elements of . Below we look at all cycle types of elements in , determine their parity, and count the number of elements of that cycle type. . If is a subgroup of , then since , we have . There are cardinality-2 subgroups generated by the elements of the form . There are exactly cyclic subgroups of cardinality : one for each pair . Furthermore, as we have seen before, we have , a cardinality-4 subgroup isomorphic to the Klein 4-group. Since conjugation preserves cycle type, and since this subgroup contains all elements of type , it is easy to see that it is normal. This gives rise to the the lattice of subgroups in . We claim that this is the complete lattice of subgroups. It suffices to argue that any subgroup of containing an element of the form and an element of the form must be all of . It is not difficult to show this just by computing some products of elements of order 2 and 3. Below you find a slightly slicker argument.  Suppose we had a subgroup containing $H=\\angvec{(12)(34)}$ and . It would follow that . Since and , we have and thus . But then we must have , in which case is normal in since . Since all elements of type are conjugate in (as one can easily verify), we'd have . This is a contradiction, since . Thus there is no such .     Lattice of subgroups of   Lattice of subgroups of A4     We now set about proving that our definition of the parity of a permutation is well defined. There are many ways of doing this. The text uses an argument based on the discriminant polynomial and the observation that given any , we have . We will pursue a completely different line of thought, thereby supplementing the book's nice proof, with another one. Our approach has the added advantage of making uses of an interesting group homomorphism . Moreover, our argument gives us the opportunity of introducing another important subgroug of the general linear group, called the orthogonal group.   Orthogonal group   Let be a positive integer. The orthogonal subgroup of ,denoted , is defined as the set of satisfying : , . We leave as an exercise the fact that is a subgroup of , and hence a group in its own right.     Permutation group representation   Let be an integer. For all , let be the -tuple whose -th coordinate is , and whose other coordinates are . Given , we define to be the unique matrix in satisfying for all .   The map defines a group homomorphism .    The composition defines a surjective group homomorphism .    We have if and only if can be written as a product of an even number of transpositions. As a result, is well defined.       The proof is left as an exercise.     Parity  At last, thanks to , we see that our definition of parity is well defined. But wait, you might object, applies only to , not a general permutation group . Of course, the easy way to get around this is to choose an isomorphism from to that sends transpositions to transpositions (the isomorphism in does this), and compose this with . The resulting homomorphism satisfies the same properties as described in .  There is another way of seeing this, however. Namely, tells us that has a normal subgroup of index 2, and hence so does and , where . In fact, it is possible to show that has exactly one such subgroup, and it is made up precisely of the elements of that can be written as a product of an even number of transpositions. We leave this fact as an exercise.   "
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
  "body": " Parity  At last, thanks to , we see that our definition of parity is well defined. But wait, you might object, applies only to , not a general permutation group . Of course, the easy way to get around this is to choose an isomorphism from to that sends transpositions to transpositions (the isomorphism in does this), and compose this with . The resulting homomorphism satisfies the same properties as described in .  There is another way of seeing this, however. Namely, tells us that has a normal subgroup of index 2, and hence so does and , where . In fact, it is possible to show that has exactly one such subgroup, and it is made up precisely of the elements of that can be written as a product of an even number of transpositions. We leave this fact as an exercise.  "
},
{
  "id": "s_group_actions_stabilizers",
  "level": "1",
  "url": "s_group_actions_stabilizers.html",
  "type": "Section",
  "number": "1.17",
  "title": "Group actions: stabilizer",
  "body": " Group actions: stabilizer   G-sets   Let be a group. A G-set is a nonempty set together with a group action .  Given -sets and , a -set morphism is a function satisfying for all and . A -set isomorphism is a bijective -set morphism.     Stabilizers and kernels of actions    group action stabilizer of    Let be a group, and let be a -set. Given a -set and nonempty subset , the stabilizer of is the set of all elements of that fix every element of : , . In the case of a singleton , we write instead of .  The kernel of a a group action is .     Stabilizers   Let be a group, and let be a -set.   Given any nonempty subset , the stabilizer is a subgroup of .    For all and , letting , we have     The kernel of the action is a normal subgroup of . In fact, letting be the homomorphism associated to the group action , we have .          Left as an exercise.    Let . We have . This proves .    The fact that follows essentially from the definition of and : if and only if for all , if and only if its associated permutation , defined as for all , is the identity map.        Permutation representation and faithfulness   Given a group action , the corresponding homomorphism , where for all , is called the permutation representation associated to the group action. The homomorphism associated to the the action of on itself by left multiplication is called the regular permutation representation .  A group action is faithful if : equivalently, if its associated permutation representation is injective.     Action on coset space   Let be a subgroup of the group , and consider the group action of on given by left multiplication .   This action is transitive.    Let . We have . As a result, is the largest normal subgroup contained in .          Given any elements , we have .    We have , where the last line follows from the fact that if and only if .  Lastly, if is a normal subgroup of , then by definition we must have for all . It follows that .        Cayley's theorem   Every group is isomorphic to a subgroup of . If , then is isomorphic to a subgroup of .    Consider the action of on itself by left multiplication, and corresponding regular permutation representation . Since this action is faithful, and is injective. We conclude that is an isomorphism between and the subgroup .  In the case where , composing with an isomorphism yields an isomorphism between and a subgroup of .     Subgroups of prime index   Let be a finite group and let be the smallest prime divisor of . If is a subgroup of of index , then is normal.    Consider the left multiplication action of on the coset space and the corresponding permutation representation . By the first isomorphism theorem, we have , where is a subgroup of . Note that since , we have , and thus .  We claim , whence the result follows. From we know that . It follows that . Next, since , . Since furthermore , we see that is a common divisor of and . But since all prime divisors of are less than , we see that and are relatively prime! Thus and , as claimed.    "
},
{
  "id": "d_Gsets",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#d_Gsets",
  "type": "Definition",
  "number": "1.130",
  "title": "G-sets.",
  "body": " G-sets   Let be a group. A G-set is a nonempty set together with a group action .  Given -sets and , a -set morphism is a function satisfying for all and . A -set isomorphism is a bijective -set morphism.   "
},
{
  "id": "d_",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#d_",
  "type": "Definition",
  "number": "1.131",
  "title": "Stabilizers and kernels of actions.",
  "body": " Stabilizers and kernels of actions    group action stabilizer of    Let be a group, and let be a -set. Given a -set and nonempty subset , the stabilizer of is the set of all elements of that fix every element of : , . In the case of a singleton , we write instead of .  The kernel of a a group action is .   "
},
{
  "id": "th_stab",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#th_stab",
  "type": "Theorem",
  "number": "1.132",
  "title": "Stabilizers.",
  "body": " Stabilizers   Let be a group, and let be a -set.   Given any nonempty subset , the stabilizer is a subgroup of .    For all and , letting , we have     The kernel of the action is a normal subgroup of . In fact, letting be the homomorphism associated to the group action , we have .          Left as an exercise.    Let . We have . This proves .    The fact that follows essentially from the definition of and : if and only if for all , if and only if its associated permutation , defined as for all , is the identity map.      "
},
{
  "id": "d_faithful_transitive",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#d_faithful_transitive",
  "type": "Definition",
  "number": "1.133",
  "title": "Permutation representation and faithfulness.",
  "body": " Permutation representation and faithfulness   Given a group action , the corresponding homomorphism , where for all , is called the permutation representation associated to the group action. The homomorphism associated to the the action of on itself by left multiplication is called the regular permutation representation .  A group action is faithful if : equivalently, if its associated permutation representation is injective.   "
},
{
  "id": "cor_coset_space_action",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#cor_coset_space_action",
  "type": "Corollary",
  "number": "1.134",
  "title": "Action on coset space.",
  "body": " Action on coset space   Let be a subgroup of the group , and consider the group action of on given by left multiplication .   This action is transitive.    Let . We have . As a result, is the largest normal subgroup contained in .          Given any elements , we have .    We have , where the last line follows from the fact that if and only if .  Lastly, if is a normal subgroup of , then by definition we must have for all . It follows that .      "
},
{
  "id": "th_cayley",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#th_cayley",
  "type": "Theorem",
  "number": "1.135",
  "title": "Cayley’s theorem.",
  "body": " Cayley's theorem   Every group is isomorphic to a subgroup of . If , then is isomorphic to a subgroup of .    Consider the action of on itself by left multiplication, and corresponding regular permutation representation . Since this action is faithful, and is injective. We conclude that is an isomorphism between and the subgroup .  In the case where , composing with an isomorphism yields an isomorphism between and a subgroup of .   "
},
{
  "id": "th_index_p",
  "level": "2",
  "url": "s_group_actions_stabilizers.html#th_index_p",
  "type": "Theorem",
  "number": "1.136",
  "title": "Subgroups of prime index.",
  "body": " Subgroups of prime index   Let be a finite group and let be the smallest prime divisor of . If is a subgroup of of index , then is normal.    Consider the left multiplication action of on the coset space and the corresponding permutation representation . By the first isomorphism theorem, we have , where is a subgroup of . Note that since , we have , and thus .  We claim , whence the result follows. From we know that . It follows that . Next, since , . Since furthermore , we see that is a common divisor of and . But since all prime divisors of are less than , we see that and are relatively prime! Thus and , as claimed.   "
},
{
  "id": "s_group_actions_orbits",
  "level": "1",
  "url": "s_group_actions_orbits.html",
  "type": "Section",
  "number": "1.18",
  "title": "Group actions: orbits",
  "body": " Group actions: orbits   Orbits   Let be a group action. Given , we define its orbit  as .     Transitive group action   A group action is transitive if for all there is a satisfying .     Orbit-stabilizer   Let be a group action.   For all , the function is an isomorphism of -sets, where acts on by left multiplication, and the action of on is given by restriction.    For all we have .            Rotational symmetries of a tetrahedron   Let be a regular tetrahedron in and let be the group of rotations in that map to itself. Establish an isomorphism between and one of our familiar groups.    Left as an exercise.     Rotational symmetries of a tetrahedron   Let be a cube in and let be the group of rotational symmetries of . Establish an isomorphism between and one of our familiar groups.    Left as an exercise.     Orbit decomposition theorem   Let be a group action.   The relation if and only if is an equivalence relation whose equivalence classes are the distinct orbits of the group action. As a result, we have a partition of into disjoint orbits, and if and only if .    As a -set, decomposes into a disjoint union of orbits, each of which is isomorphic as a -set to for some subgroup .           We end this section with a fantastic result commonly known as Burnside's lemma even though it was first proved (using modern group-theoretic language) by Frobenius. Consequently, some mathematical wags refer to the result as the lemma that is not Burnside's . We confuse things even further by giving it the designation of a theorem! The result allows us to count the distinct orbits of a group action in terms of so-called fix sets, which we now define.   Fix sets   Let be a group action. Given an element , the fix set of under this action, denoted , is defined as . More generally, given a subset , we define its fix set as .     Burnside's lemma  Frobenius   Let be a finite group acting on a finite nonempty set , and let be the set of orbits of the group action. We have .        "
},
{
  "id": "d_orbits",
  "level": "2",
  "url": "s_group_actions_orbits.html#d_orbits",
  "type": "Definition",
  "number": "1.137",
  "title": "Orbits.",
  "body": " Orbits   Let be a group action. Given , we define its orbit  as .   "
},
{
  "id": "d_transitive",
  "level": "2",
  "url": "s_group_actions_orbits.html#d_transitive",
  "type": "Definition",
  "number": "1.138",
  "title": "Transitive group action.",
  "body": " Transitive group action   A group action is transitive if for all there is a satisfying .   "
},
{
  "id": "th_transitive_action",
  "level": "2",
  "url": "s_group_actions_orbits.html#th_transitive_action",
  "type": "Theorem",
  "number": "1.139",
  "title": "Orbit-stabilizer.",
  "body": " Orbit-stabilizer   Let be a group action.   For all , the function is an isomorphism of -sets, where acts on by left multiplication, and the action of on is given by restriction.    For all we have .          "
},
{
  "id": "eg_tetrahedron",
  "level": "2",
  "url": "s_group_actions_orbits.html#eg_tetrahedron",
  "type": "Example",
  "number": "1.140",
  "title": "Rotational symmetries of a tetrahedron.",
  "body": " Rotational symmetries of a tetrahedron   Let be a regular tetrahedron in and let be the group of rotations in that map to itself. Establish an isomorphism between and one of our familiar groups.    Left as an exercise.   "
},
{
  "id": "eg_cube",
  "level": "2",
  "url": "s_group_actions_orbits.html#eg_cube",
  "type": "Example",
  "number": "1.141",
  "title": "Rotational symmetries of a tetrahedron.",
  "body": " Rotational symmetries of a tetrahedron   Let be a cube in and let be the group of rotational symmetries of . Establish an isomorphism between and one of our familiar groups.    Left as an exercise.   "
},
{
  "id": "th_orbit_decomp",
  "level": "2",
  "url": "s_group_actions_orbits.html#th_orbit_decomp",
  "type": "Theorem",
  "number": "1.142",
  "title": "Orbit decomposition theorem.",
  "body": " Orbit decomposition theorem   Let be a group action.   The relation if and only if is an equivalence relation whose equivalence classes are the distinct orbits of the group action. As a result, we have a partition of into disjoint orbits, and if and only if .    As a -set, decomposes into a disjoint union of orbits, each of which is isomorphic as a -set to for some subgroup .          "
},
{
  "id": "d_fix_sets",
  "level": "2",
  "url": "s_group_actions_orbits.html#d_fix_sets",
  "type": "Definition",
  "number": "1.143",
  "title": "Fix sets.",
  "body": " Fix sets   Let be a group action. Given an element , the fix set of under this action, denoted , is defined as . More generally, given a subset , we define its fix set as .   "
},
{
  "id": "th_burnside",
  "level": "2",
  "url": "s_group_actions_orbits.html#th_burnside",
  "type": "Theorem",
  "number": "1.144",
  "title": "Burnside’s lemma.",
  "body": " Burnside's lemma  Frobenius   Let be a finite group acting on a finite nonempty set , and let be the set of orbits of the group action. We have .       "
},
{
  "id": "s_class_number",
  "level": "1",
  "url": "s_class_number.html",
  "type": "Section",
  "number": "1.19",
  "title": "Class equation",
  "body": " Class equation  This section will essentially be a long format example of computing stabilizers and orbits for one particular type of group action: namely, the action of a group on itself by conjugation. The class equation of a group is a one-line summary of the number and sizes of the orbits of under the action of conjugation.   Conjugacy class   The conjugacy class of an element of the group , denoted is the set of all conjugates of in: , . Equivalently, the conjugacy class of is the orbit of under the action of conjugation.     Conjugacy and the class equation   Let be a finite group and consider the action of on itself by conjugation.   For all , we have . It follows from the orbit-stabilizer theorem that .    We have .    Let , be the distinct conjugacy classes of , and assume further that , , is the set of conjugacy classes consisting of a single element. We have a partition , from which it follows that .            Class equation   Let be a finite group, and let be the distinct conjugacy classes of . The class equation of is the equation .     is useful both for extracting information about a group from its class equation, as well as taking some shortcuts for computing the class equation of a group.   Class equation: abelian groups   Prove: a finite group is abelian if and only if its class equation is of the form .         Class equation:   Compute the class equation of .         Center of a -group   Assume is a group of cardinality , where is a prime integer. The center of is nontrivial: , .         Groups of cardinality   If is a group of cardinality , where is a prime integer, then is abelian.     Partition of   Let be a positive integer. A partition of is an -tuple for some satisfying . Given a partiion we define its type  to be the -tuple , where is the number of entries of equal to for all .     Class equation of   Let be a positive integer, let be the set of all partitions of , and let be the set of all types of these partitions. The class equation of is .         Stabilizers of cycles   Let be a -cycle in . Let and let . We have .     Class equation:   Determine the class equation of .    First we describe the different cycle types of elements of . . Given of one of these types, we know that its conjugacy class in consists of all elements of that same type. However, we are computing conjugacy classes in ! Since we are conjugating by fewer elements, its conjugacy class in will be a subset of its conjugacy class in . It follows that each conjugacy class in breaks ups into a disjoint union of conjugacy classes in . As you will show in your homework, some of these conjugacy classes remain intact, while the others split into exactly two conjugacy classes.     Simplicity of   For all the alternating group is simple.        "
},
{
  "id": "d_conjugacy_class",
  "level": "2",
  "url": "s_class_number.html#d_conjugacy_class",
  "type": "Definition",
  "number": "1.145",
  "title": "Conjugacy class.",
  "body": " Conjugacy class   The conjugacy class of an element of the group , denoted is the set of all conjugates of in: , . Equivalently, the conjugacy class of is the orbit of under the action of conjugation.   "
},
{
  "id": "th_class_equation",
  "level": "2",
  "url": "s_class_number.html#th_class_equation",
  "type": "Theorem",
  "number": "1.146",
  "title": "Conjugacy and the class equation.",
  "body": " Conjugacy and the class equation   Let be a finite group and consider the action of on itself by conjugation.   For all , we have . It follows from the orbit-stabilizer theorem that .    We have .    Let , be the distinct conjugacy classes of , and assume further that , , is the set of conjugacy classes consisting of a single element. We have a partition , from which it follows that .          "
},
{
  "id": "d_class_equation",
  "level": "2",
  "url": "s_class_number.html#d_class_equation",
  "type": "Definition",
  "number": "1.147",
  "title": "Class equation.",
  "body": " Class equation   Let be a finite group, and let be the distinct conjugacy classes of . The class equation of is the equation .   "
},
{
  "id": "eg_class_eq_abelian",
  "level": "2",
  "url": "s_class_number.html#eg_class_eq_abelian",
  "type": "Example",
  "number": "1.148",
  "title": "Class equation: abelian groups.",
  "body": " Class equation: abelian groups   Prove: a finite group is abelian if and only if its class equation is of the form .       "
},
{
  "id": "eg_class_eqn_D8",
  "level": "2",
  "url": "s_class_number.html#eg_class_eqn_D8",
  "type": "Example",
  "number": "1.149",
  "title": "Class equation: <span class=\"process-math\">\\(D_8\\)<\/span>.",
  "body": " Class equation:   Compute the class equation of .       "
},
{
  "id": "th_center_pgroup",
  "level": "2",
  "url": "s_class_number.html#th_center_pgroup",
  "type": "Theorem",
  "number": "1.150",
  "title": "Center of a <span class=\"process-math\">\\(p\\)<\/span>-group.",
  "body": " Center of a -group   Assume is a group of cardinality , where is a prime integer. The center of is nontrivial: , .       "
},
{
  "id": "cor_psquared",
  "level": "2",
  "url": "s_class_number.html#cor_psquared",
  "type": "Corollary",
  "number": "1.151",
  "title": "Groups of cardinality <span class=\"process-math\">\\(p^2\\)<\/span>.",
  "body": " Groups of cardinality   If is a group of cardinality , where is a prime integer, then is abelian.   "
},
{
  "id": "d_partitions_of_n",
  "level": "2",
  "url": "s_class_number.html#d_partitions_of_n",
  "type": "Definition",
  "number": "1.152",
  "title": "Partition of <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Partition of   Let be a positive integer. A partition of is an -tuple for some satisfying . Given a partiion we define its type  to be the -tuple , where is the number of entries of equal to for all .   "
},
{
  "id": "th_class_eq_Sn",
  "level": "2",
  "url": "s_class_number.html#th_class_eq_Sn",
  "type": "Theorem",
  "number": "1.153",
  "title": "Class equation of <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": " Class equation of   Let be a positive integer, let be the set of all partitions of , and let be the set of all types of these partitions. The class equation of is .       "
},
{
  "id": "cor_stab_cycle",
  "level": "2",
  "url": "s_class_number.html#cor_stab_cycle",
  "type": "Corollary",
  "number": "1.154",
  "title": "Stabilizers of cycles.",
  "body": " Stabilizers of cycles   Let be a -cycle in . Let and let . We have .   "
},
{
  "id": "eg_class_eq_A5",
  "level": "2",
  "url": "s_class_number.html#eg_class_eq_A5",
  "type": "Example",
  "number": "1.155",
  "title": "Class equation: <span class=\"process-math\">\\(A_5\\)<\/span>.",
  "body": " Class equation:   Determine the class equation of .    First we describe the different cycle types of elements of . . Given of one of these types, we know that its conjugacy class in consists of all elements of that same type. However, we are computing conjugacy classes in ! Since we are conjugating by fewer elements, its conjugacy class in will be a subset of its conjugacy class in . It follows that each conjugacy class in breaks ups into a disjoint union of conjugacy classes in . As you will show in your homework, some of these conjugacy classes remain intact, while the others split into exactly two conjugacy classes.   "
},
{
  "id": "th_simple_An",
  "level": "2",
  "url": "s_class_number.html#th_simple_An",
  "type": "Theorem",
  "number": "1.156",
  "title": "Simplicity of <span class=\"process-math\">\\(A_n\\)<\/span>.",
  "body": " Simplicity of   For all the alternating group is simple.       "
},
{
  "id": "s_Sylow_A",
  "level": "1",
  "url": "s_Sylow_A.html",
  "type": "Section",
  "number": "1.20",
  "title": "Sylow theorems: intro",
  "body": " Sylow theorems: intro   Stamement and illustration of Sylow theorems   Order at    -adic valuation of    Let be nonzero integer, and let be a prime integer. The -adic valuation of , denoted , is the largest integer such that .     -adic valuation  It follows from the fundamental theorem of arithmetic that the -adic valuation of an integer can be read directly from the prime factorization of . For example, from $12=2^2\\cdot 3$ we conclude .    Sylow subgroups   Let be a finite group of cardinality . Let be a prime divisor of , and let . A -Sylow subgroup of is a subgroup of of cardinality . We denote the set of all -Sylow subgroups : , . Lastly we let be the number of -Sylow subgroups of : .    Let's illustrate the definitions above with some groups whose lattices of subgroups we know a great deal about already.   Sylow subgroups of   We have . From the lattice of subgroups of , we see immediately that and thus      Sylow subgroups of cyclic groups   Let be a finite cyclic group of cardinality . Fix a prime divisor of , and let , so that , where . From , we know there is exactly one subgroup of of cardinality : namely, . Thus and .     Sylow subgroups of   We have . Having computed the complete lattice of subgroups of (see ) we see that and thus .     Sylow subgroups of   We have . We have not computed the full lattice of subgroups of yet, so we are not quite in a position to say immediately what the various Sylow subgroups of are.  However, since a 3-Sylow subgroup is just a group of cardinality 3 in this case, it must be a cyclic subgroup generated by a 3-cycle. Thus, we have , just as in .  What about the -Sylow subgroups? Recall that you showed in a homework exercise that there are exactly three subgroups of that are isomorphic to : call them . (In fact, each can be described as .) Thus we have . It turns out that this inclusion is in fact an equality, as we will be able to show using Sylow 2.    Before stating the three Sylow subgroups, we make official the notion of a -group.   -group   Let be a prime integer. A -group is a group of cardinality for some positive integer . Given a group , a -subgroup of is a subgroup that is a -group.     Sylow 1   Let be a group of finite cardinality , and let be a prime divisor of . We have . In other words, has a -Sylow subgroup.     Sylow 2   Let be a group of finite cardinality and let be a prime divisor of . Given any -subgroup and -Sylow subgroup , we have for some . As a result, any two -Sylow subgroups of are conjugate.    The corollary below follows almost immediately from by taking to be a -Sylow subgroup.   -Sylow subgroups   Let be a finite group, and let be a prime divisor of .   Any two -Sylow subgroups of are conjugate. Equivalently, forms a single orbit under conjugation.    Any two -Sylow subgroups are isomorphic.     if and only if contains a normal -Sylow subgroup.        Sylow 3   Let be a group of finite cardinality , let be a prime divisor of , and let , so that , where . We have .    The statements of and are easily verified in examples . Using , we can now verify that our description of the -Sylow subgroups of in is complete. Why? We know that has exactly three subgroups isomorphic to . Since their cardinality is , these are -Sylow subgroups. Are there any others? No! By all -Sylow subgroups of are conjugate. Since conjugation defines an isomorphism, it follows that all -Sylow subgroups of are isomorphic to . Thus the three we provided are the only ones.  In a similar vein, tells us that all of the -Sylow subgroups of are conjugate. This is not immediately obvious, especially since the 3-cycles of break up into two distinct conjugacy classes: .    First action: on -subsets of  Our proof of the Sylow theorems proceeds as a sequence of three well-chosen group actions, each of whose decomposition into orbits yields useful information. For the first action, we have acting on the set of all subsets of of cardinality , where : , , the set of all -subsets of . The action here is by left multiplication: , given and , we define . A detailed analysis of this action is given in . This reveals that the -Sylow subgroups of are in 1-1 correspondence with the orbits of this action that are generated by an actual subgroup. Before getting into the details of that proof, it pays to look at a concrete example.   Action of on -subsets   Let , and let be the set of all -subsets of . The action of on gives rise to the following orbits: . Note that the three -Sylow subgroups of are contained in the three distinct orbits of size , and that the one orbit whose cardinality is greater than includes no -Sylow subgroups.     Action of on -subsets   Let be a finite group of cardinality , let be a prime divisor of , and let , so that , where . We consider the action of by left multiplication on , the set of all -subsets of .   There are elements such that decomposes into disjoint orbits , and for all .     for all . Furthermore, if and only if .     if and only if is a -Sylow subgroup of . In this case .     .          It suffices to prove that any orbit contains a subset that contains . This is easy, if , then .    With as above, we have . This is because if , then since and , we must have . As a result, we have . It follows that . For the second statement notes that since is a divisor of , it must be of the form or for some with . From this it follows that if and only if .    Since and , it follows that for some .We have if and only if if and only if , since and . In this case is a -Sylow subgroup of , and by definition of the group action, the orbit is literally the coset space .    We claim that the -Sylow subgroups of are in 1-1 correspondence with the orbits of of cardinality . Indeed, since each such orbit is of the form for some , and since is the only subgroup of the coset space , we see that each such orbit contains exactly one -Sylow subgroup. Furthermore, for any -Sylow subgroup its orbit must have cardinality .  Let be the distinct orbits of of cardinality . We have , where for all . The last line follows since there are exactly orbits of cardinality , and since all other orbits have cardinality for some . As a result, we have . Now for a wonderful trick. Since the equivalence above holds for any group of cardinality , in particular it holds for a cyclic group. But in this special case we have . It follows that . Lastly, since , it is invertible modulo , allowing us to conclude that , as desired.       Note that includes the formula among its results, giving us a partial proof of . Additionally, formula implies , as we me now make official.   Sylow subgroups exist   Let be a finite group of cardinality , and let be a prime divisor of . We have .    Since and , it follows that . Equivalently, .    Before leaving this first group action in our suite of group actions, we extract from the proof of a wonderful gem of a combinatorial fact.    Let be a positive integer, and let for the prime integer . We have .     "
},
{
  "id": "d_order_p",
  "level": "2",
  "url": "s_Sylow_A.html#d_order_p",
  "type": "Definition",
  "number": "1.157",
  "title": "Order at <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Order at    -adic valuation of    Let be nonzero integer, and let be a prime integer. The -adic valuation of , denoted , is the largest integer such that .   "
},
{
  "id": "ss_Sylow_statements-3",
  "level": "2",
  "url": "s_Sylow_A.html#ss_Sylow_statements-3",
  "type": "Remark",
  "number": "1.158",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-adic valuation.",
  "body": " -adic valuation  It follows from the fundamental theorem of arithmetic that the -adic valuation of an integer can be read directly from the prime factorization of . For example, from $12=2^2\\cdot 3$ we conclude .  "
},
{
  "id": "d_Sylow_subgroups",
  "level": "2",
  "url": "s_Sylow_A.html#d_Sylow_subgroups",
  "type": "Definition",
  "number": "1.159",
  "title": "Sylow subgroups.",
  "body": " Sylow subgroups   Let be a finite group of cardinality . Let be a prime divisor of , and let . A -Sylow subgroup of is a subgroup of of cardinality . We denote the set of all -Sylow subgroups : , . Lastly we let be the number of -Sylow subgroups of : .   "
},
{
  "id": "eg_Sylow_S3",
  "level": "2",
  "url": "s_Sylow_A.html#eg_Sylow_S3",
  "type": "Example",
  "number": "1.160",
  "title": "Sylow subgroups of <span class=\"process-math\">\\(S_3\\)<\/span>.",
  "body": " Sylow subgroups of   We have . From the lattice of subgroups of , we see immediately that and thus    "
},
{
  "id": "eg_Sylow_cyclic",
  "level": "2",
  "url": "s_Sylow_A.html#eg_Sylow_cyclic",
  "type": "Example",
  "number": "1.161",
  "title": "Sylow subgroups of cyclic groups.",
  "body": " Sylow subgroups of cyclic groups   Let be a finite cyclic group of cardinality . Fix a prime divisor of , and let , so that , where . From , we know there is exactly one subgroup of of cardinality : namely, . Thus and .   "
},
{
  "id": "eg_Sylow_A4",
  "level": "2",
  "url": "s_Sylow_A.html#eg_Sylow_A4",
  "type": "Example",
  "number": "1.162",
  "title": "Sylow subgroups of <span class=\"process-math\">\\(A_4\\)<\/span>.",
  "body": " Sylow subgroups of   We have . Having computed the complete lattice of subgroups of (see ) we see that and thus .   "
},
{
  "id": "eg_Sylow_S4",
  "level": "2",
  "url": "s_Sylow_A.html#eg_Sylow_S4",
  "type": "Example",
  "number": "1.163",
  "title": "Sylow subgroups of <span class=\"process-math\">\\(S_4\\)<\/span>.",
  "body": " Sylow subgroups of   We have . We have not computed the full lattice of subgroups of yet, so we are not quite in a position to say immediately what the various Sylow subgroups of are.  However, since a 3-Sylow subgroup is just a group of cardinality 3 in this case, it must be a cyclic subgroup generated by a 3-cycle. Thus, we have , just as in .  What about the -Sylow subgroups? Recall that you showed in a homework exercise that there are exactly three subgroups of that are isomorphic to : call them . (In fact, each can be described as .) Thus we have . It turns out that this inclusion is in fact an equality, as we will be able to show using Sylow 2.   "
},
{
  "id": "d_pgroup",
  "level": "2",
  "url": "s_Sylow_A.html#d_pgroup",
  "type": "Definition",
  "number": "1.164",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-group.",
  "body": " -group   Let be a prime integer. A -group is a group of cardinality for some positive integer . Given a group , a -subgroup of is a subgroup that is a -group.   "
},
{
  "id": "th_Sylow_1",
  "level": "2",
  "url": "s_Sylow_A.html#th_Sylow_1",
  "type": "Theorem",
  "number": "1.165",
  "title": "Sylow 1.",
  "body": " Sylow 1   Let be a group of finite cardinality , and let be a prime divisor of . We have . In other words, has a -Sylow subgroup.   "
},
{
  "id": "th_Sylow_2",
  "level": "2",
  "url": "s_Sylow_A.html#th_Sylow_2",
  "type": "Theorem",
  "number": "1.166",
  "title": "Sylow 2.",
  "body": " Sylow 2   Let be a group of finite cardinality and let be a prime divisor of . Given any -subgroup and -Sylow subgroup , we have for some . As a result, any two -Sylow subgroups of are conjugate.   "
},
{
  "id": "cor_pSylow_subgroups",
  "level": "2",
  "url": "s_Sylow_A.html#cor_pSylow_subgroups",
  "type": "Corollary",
  "number": "1.167",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-Sylow subgroups.",
  "body": " -Sylow subgroups   Let be a finite group, and let be a prime divisor of .   Any two -Sylow subgroups of are conjugate. Equivalently, forms a single orbit under conjugation.    Any two -Sylow subgroups are isomorphic.     if and only if contains a normal -Sylow subgroup.      "
},
{
  "id": "th_Sylow_3",
  "level": "2",
  "url": "s_Sylow_A.html#th_Sylow_3",
  "type": "Theorem",
  "number": "1.168",
  "title": "Sylow 3.",
  "body": " Sylow 3   Let be a group of finite cardinality , let be a prime divisor of , and let , so that , where . We have .   "
},
{
  "id": "ss_Sylow_action_subsets-2",
  "level": "2",
  "url": "s_Sylow_A.html#ss_Sylow_action_subsets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-subsets "
},
{
  "id": "eg_pk-set_action",
  "level": "2",
  "url": "s_Sylow_A.html#eg_pk-set_action",
  "type": "Example",
  "number": "1.169",
  "title": "Action of <span class=\"process-math\">\\(D_3\\)<\/span> on <span class=\"process-math\">\\(2\\)<\/span>-subsets.",
  "body": " Action of on -subsets   Let , and let be the set of all -subsets of . The action of on gives rise to the following orbits: . Note that the three -Sylow subgroups of are contained in the three distinct orbits of size , and that the one orbit whose cardinality is greater than includes no -Sylow subgroups.   "
},
{
  "id": "prop_G_acts_psets",
  "level": "2",
  "url": "s_Sylow_A.html#prop_G_acts_psets",
  "type": "Proposition",
  "number": "1.170",
  "title": "Action of <span class=\"process-math\">\\(G\\)<\/span> on <span class=\"process-math\">\\(p^k\\)<\/span>-subsets.",
  "body": " Action of on -subsets   Let be a finite group of cardinality , let be a prime divisor of , and let , so that , where . We consider the action of by left multiplication on , the set of all -subsets of .   There are elements such that decomposes into disjoint orbits , and for all .     for all . Furthermore, if and only if .     if and only if is a -Sylow subgroup of . In this case .     .          It suffices to prove that any orbit contains a subset that contains . This is easy, if , then .    With as above, we have . This is because if , then since and , we must have . As a result, we have . It follows that . For the second statement notes that since is a divisor of , it must be of the form or for some with . From this it follows that if and only if .    Since and , it follows that for some .We have if and only if if and only if , since and . In this case is a -Sylow subgroup of , and by definition of the group action, the orbit is literally the coset space .    We claim that the -Sylow subgroups of are in 1-1 correspondence with the orbits of of cardinality . Indeed, since each such orbit is of the form for some , and since is the only subgroup of the coset space , we see that each such orbit contains exactly one -Sylow subgroup. Furthermore, for any -Sylow subgroup its orbit must have cardinality .  Let be the distinct orbits of of cardinality . We have , where for all . The last line follows since there are exactly orbits of cardinality , and since all other orbits have cardinality for some . As a result, we have . Now for a wonderful trick. Since the equivalence above holds for any group of cardinality , in particular it holds for a cyclic group. But in this special case we have . It follows that . Lastly, since , it is invertible modulo , allowing us to conclude that , as desired.      "
},
{
  "id": "cor_Sylow_subgroup_exists",
  "level": "2",
  "url": "s_Sylow_A.html#cor_Sylow_subgroup_exists",
  "type": "Corollary",
  "number": "1.171",
  "title": "Sylow subgroups exist.",
  "body": " Sylow subgroups exist   Let be a finite group of cardinality , and let be a prime divisor of . We have .    Since and , it follows that . Equivalently, .   "
},
{
  "id": "cor_n_choose_pk",
  "level": "2",
  "url": "s_Sylow_A.html#cor_n_choose_pk",
  "type": "Corollary",
  "number": "1.172",
  "title": "",
  "body": "  Let be a positive integer, and let for the prime integer . We have .   "
},
{
  "id": "s_Sylow_B",
  "level": "1",
  "url": "s_Sylow_B.html",
  "type": "Section",
  "number": "1.21",
  "title": "Sylow theorems: conclusion of proof",
  "body": " Sylow theorems: conclusion of proof   Second action: on  We now move on to a proof of the the . That proof makes use of the left multiplication action of on the coset space , where . The proof will make use of the following proposition, which is interesting in its own right.   Fix point of -group action   Let be a -group. If acts on a finite set satisfying , then there is an element with : , contains an element that is fixed by all elements of .    Decompose into its distict orbits . Since , we see that either is divisible by , or , in which case . But we cannot have for all , since then we'd have , contradicting the fact that . Thus we have for some , as desired.     Proof of Sylow 2  Let be a prime divisor of , let , let be a -subgroup of , and consider the action of on . Since , where , it follows that one of the cosets of is fixed under left multiplication by : , for all . But by it follows that , as desired.     Third action: on     "
},
{
  "id": "prop_pgroup_action",
  "level": "2",
  "url": "s_Sylow_B.html#prop_pgroup_action",
  "type": "Proposition",
  "number": "1.173",
  "title": "Fix point of <span class=\"process-math\">\\(p\\)<\/span>-group action.",
  "body": " Fix point of -group action   Let be a -group. If acts on a finite set satisfying , then there is an element with : , contains an element that is fixed by all elements of .    Decompose into its distict orbits . Since , we see that either is divisible by , or , in which case . But we cannot have for all , since then we'd have , contradicting the fact that . Thus we have for some , as desired.   "
},
{
  "id": "ss_second_action-4",
  "level": "2",
  "url": "s_Sylow_B.html#ss_second_action-4",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Sylow 2.",
  "body": " Proof of Sylow 2  Let be a prime divisor of , let , let be a -subgroup of , and consider the action of on . Since , where , it follows that one of the cosets of is fixed under left multiplication by : , for all . But by it follows that , as desired.  "
},
{
  "id": "s_Sylow_apps",
  "level": "1",
  "url": "s_Sylow_apps.html",
  "type": "Section",
  "number": "1.22",
  "title": "Sylow theorems: applications",
  "body": " Sylow theorems: applications  Much of the rest of this course will be devoted to classifying finite groups up to isomorphism, and the Sylow theorems will be an important tool in this regard. We illustrate this with some first results here.   Cauchy's theorem   Let be a finite group, and let be a prime divisor of . There is an element of of order .    Let and take any nontrivial element . Since is cyclic of cardinality for some , there is an element of order .     Groups of cardinality   Let be a group of cardinality where and are distinct primes and .    has a normal subgroup of cardinality .    If , then is cyclic.          Since , we have . Since and since (since ), we conclude that and thus that has a normal -Sylow subgroup.    The argument here is very similar to the one above with the roles of and reversed.        Groups of cardinality   If is a group of cardinality , then either has a normal -Sylow subgroup or .    We show that if does not have a normal -Sylow subgroup, then . Assume does not have a normal -Sylow subgroup: or equivalently, . Since and , it follows that . Let . By Sylow 2     Groups of cardinality   Let be a finite group of cardinality , where and are distinct primes.   If , then has a -Sylow subgroup.    If , then either and , or has a normal -Sylow subgroup.   In particular, contains a normal Sylow subgroup.    First observe that if , then since and , we must have , and thus has a normal -Sylow subgroup.  Now assume and . Since , it follows that , and furthermore that . We have the following options for the number of Sylow subgroups: . We will show that if , then .     Groups of cardinality 20   Let be a group of cardinality .   Show that has a normal -Sylow subgroup.    Show that is a abelian if and only has a normal -Sylow subgroup, and that in this case isomorphic either to or .    A -Sylow subgroup of is isomorphic either to or . Give examples of nonabelian groups for each case.          The previous theorem guarantees that and hence that has a normal -Sylow subgroup. You can also see this easily using the Sylow theorems since implies and implies .    The reverse implication is easy: has a -Sylow subgroup by Sylow 1, and this subgroup is normal since is abelian!  Now assume has a normal -Sylow subgroup , . Since has a normal -Sylow subgroup , , we have and . It follows from a homework exercise that . Since and is isomorphic either to or (the only isomorphism types of groups of cardinality ), we have . In particular, is abelian!    The group is a nonabelian group whose -Sylow subgroups are all isomorphic to . Why? Because has a cardinality-4 subgroup (Sylow 1), and does not contain any element of order . More explicitly, you can show that the subgroups are the five -Sylow subgroups of .  The group is a nonabelian group of cardinality whose -Sylow subgroups are each isomorphic to . (See definition below.) This is easiest to see by using the isomorphism . Indeed, the matrix is easily seen to have order , and thus .       The last example introduced an affine transformation group . We give an official definition of these groups in . There are a number of easy claims included in that group definition that we leave as exercises to the reader.   Group of invertible affine transformations    group of invertible affine transformations of    Let be an integer. An affine transformation of is a function of the form , where . Such a function is invertible if and only if and we denote by the set of all invertible affine transformations of : , . This set forms a group under composition of functions, and we have , as witnessed by the map .     Simplicity of groups of cardinality 60   Let be a group of cardinality . If , then is simple.         Unique simple group of cardinality 60   Let be a group of cardinality . If is simple, then .         Group of rotational symmetries of the dodecahedron   Let be a regular dodecahedron in , and let be its group of rotational symmetries. We have .    The regular dodecahedron has pentagonal faces, edges, and vertices. Consider the action of on the set of faces of . It is easy to see that this action is transitive, and that the stabilizer of any given face consists of the rotations of degree about the axis passing through the centers of that face and its opposite face. It follows from the orbit-stabilizer theorem that . Furthermore, since contains such rotations of order for each of the 6 pairs of opposite faces, we see that it has at least elements of order . It follows that . We conclude from that is simple, and from that .    "
},
{
  "id": "th_Cauchys",
  "level": "2",
  "url": "s_Sylow_apps.html#th_Cauchys",
  "type": "Theorem",
  "number": "1.174",
  "title": "Cauchy’s theorem.",
  "body": " Cauchy's theorem   Let be a finite group, and let be a prime divisor of . There is an element of of order .    Let and take any nontrivial element . Since is cyclic of cardinality for some , there is an element of order .   "
},
{
  "id": "th_card_pq",
  "level": "2",
  "url": "s_Sylow_apps.html#th_card_pq",
  "type": "Theorem",
  "number": "1.175",
  "title": "Groups of cardinality <span class=\"process-math\">\\(pq\\)<\/span>.",
  "body": " Groups of cardinality   Let be a group of cardinality where and are distinct primes and .    has a normal subgroup of cardinality .    If , then is cyclic.          Since , we have . Since and since (since ), we conclude that and thus that has a normal -Sylow subgroup.    The argument here is very similar to the one above with the roles of and reversed.      "
},
{
  "id": "th_card_12",
  "level": "2",
  "url": "s_Sylow_apps.html#th_card_12",
  "type": "Theorem",
  "number": "1.176",
  "title": "Groups of cardinality <span class=\"process-math\">\\(12\\)<\/span>.",
  "body": " Groups of cardinality   If is a group of cardinality , then either has a normal -Sylow subgroup or .    We show that if does not have a normal -Sylow subgroup, then . Assume does not have a normal -Sylow subgroup: or equivalently, . Since and , it follows that . Let . By Sylow 2   "
},
{
  "id": "th_card_psquaredq",
  "level": "2",
  "url": "s_Sylow_apps.html#th_card_psquaredq",
  "type": "Theorem",
  "number": "1.177",
  "title": "Groups of cardinality <span class=\"process-math\">\\(p^2q\\)<\/span>.",
  "body": " Groups of cardinality   Let be a finite group of cardinality , where and are distinct primes.   If , then has a -Sylow subgroup.    If , then either and , or has a normal -Sylow subgroup.   In particular, contains a normal Sylow subgroup.    First observe that if , then since and , we must have , and thus has a normal -Sylow subgroup.  Now assume and . Since , it follows that , and furthermore that . We have the following options for the number of Sylow subgroups: . We will show that if , then .   "
},
{
  "id": "eg_card_20_group",
  "level": "2",
  "url": "s_Sylow_apps.html#eg_card_20_group",
  "type": "Example",
  "number": "1.178",
  "title": "Groups of cardinality 20.",
  "body": " Groups of cardinality 20   Let be a group of cardinality .   Show that has a normal -Sylow subgroup.    Show that is a abelian if and only has a normal -Sylow subgroup, and that in this case isomorphic either to or .    A -Sylow subgroup of is isomorphic either to or . Give examples of nonabelian groups for each case.          The previous theorem guarantees that and hence that has a normal -Sylow subgroup. You can also see this easily using the Sylow theorems since implies and implies .    The reverse implication is easy: has a -Sylow subgroup by Sylow 1, and this subgroup is normal since is abelian!  Now assume has a normal -Sylow subgroup , . Since has a normal -Sylow subgroup , , we have and . It follows from a homework exercise that . Since and is isomorphic either to or (the only isomorphism types of groups of cardinality ), we have . In particular, is abelian!    The group is a nonabelian group whose -Sylow subgroups are all isomorphic to . Why? Because has a cardinality-4 subgroup (Sylow 1), and does not contain any element of order . More explicitly, you can show that the subgroups are the five -Sylow subgroups of .  The group is a nonabelian group of cardinality whose -Sylow subgroups are each isomorphic to . (See definition below.) This is easiest to see by using the isomorphism . Indeed, the matrix is easily seen to have order , and thus .      "
},
{
  "id": "spec_affine_transformations",
  "level": "2",
  "url": "s_Sylow_apps.html#spec_affine_transformations",
  "type": "Specimen",
  "number": "15",
  "title": "Group of invertible affine transformations.",
  "body": " Group of invertible affine transformations    group of invertible affine transformations of    Let be an integer. An affine transformation of is a function of the form , where . Such a function is invertible if and only if and we denote by the set of all invertible affine transformations of : , . This set forms a group under composition of functions, and we have , as witnessed by the map .   "
},
{
  "id": "th_card_60_simple",
  "level": "2",
  "url": "s_Sylow_apps.html#th_card_60_simple",
  "type": "Theorem",
  "number": "1.179",
  "title": "Simplicity of groups of cardinality 60.",
  "body": " Simplicity of groups of cardinality 60   Let be a group of cardinality . If , then is simple.       "
},
{
  "id": "th_A5_isomorphism",
  "level": "2",
  "url": "s_Sylow_apps.html#th_A5_isomorphism",
  "type": "Theorem",
  "number": "1.180",
  "title": "Unique simple group of cardinality 60.",
  "body": " Unique simple group of cardinality 60   Let be a group of cardinality . If is simple, then .       "
},
{
  "id": "cor_isos_symmetries",
  "level": "2",
  "url": "s_Sylow_apps.html#cor_isos_symmetries",
  "type": "Corollary",
  "number": "1.181",
  "title": "Group of rotational symmetries of the dodecahedron.",
  "body": " Group of rotational symmetries of the dodecahedron   Let be a regular dodecahedron in , and let be its group of rotational symmetries. We have .    The regular dodecahedron has pentagonal faces, edges, and vertices. Consider the action of on the set of faces of . It is easy to see that this action is transitive, and that the stabilizer of any given face consists of the rotations of degree about the axis passing through the centers of that face and its opposite face. It follows from the orbit-stabilizer theorem that . Furthermore, since contains such rotations of order for each of the 6 pairs of opposite faces, we see that it has at least elements of order . It follows that . We conclude from that is simple, and from that .   "
},
{
  "id": "s_products_direct_semi",
  "level": "1",
  "url": "s_products_direct_semi.html",
  "type": "Section",
  "number": "1.23",
  "title": "Direct products",
  "body": " Direct products  We begin with a characterization of groups that are isomorphic to a direct product.   Characterization of direct products   A group is isomorphic to a direct product if and only if the conditions below are satisfied.   For all there is a normal subgroup and an isomorphism .    The normal subgroups satisfy .       The forward implication is relatively straightforward. Given , where , define . It is easy to see that the collection satisfy conditions (i) and (ii).  For the reverse implication, given normal subgroups satisfying conditions (i) and (ii), define . We claim is an isomorphism. Once we know is a homomorphism, it is not dificult to show that it is an isomorphism. Indeed, surjectivity follows from ; and injectivity follows from , which implies . That is a homomorphism follow from the fact that if elements from different subgroups commute with one another. We leave the details to the reader.     Interal direct product   Given a group and normal subgroups satisfying (i) and (ii) of , we say that is the internal direct product of the subgroups .     Internal direct products of Sylow subgroups   Let be a finite group of cardinality , and let be the distinct prime divisors of . The following conditions are equivalent.    is an internal direct product of its Sylow subgroups.     for all .        Sylow theorems for abelian groups   Let be a finite abelian group of cardinality , and let be the prime divisors of .   For each there is a unique -Sylow subgroup of , , and .     is the internal direct product of the . In particular, we have .        Torsion subgroups   Let be an abelian group. For all prime numbers , the -torsion subgroup of , denoted is defined as the set of all elements of whose order is a power of : , . The torsion subgroup of is the set of all elements of of finite order.     Structure of finite abelian groups: elementary divisors   Let be a finite abelian group of cardinality , let be the distinct prime divisors of . Assume factors as .    , where is an abelian group of cardinality .    For all there are is a unique sequence of integers satisfying .       In Math 331-2 we will prove a more general result, called the structure theorem for finitely generated modules over PIDs that implies this theorem.    "
},
{
  "id": "th_direct_prod",
  "level": "2",
  "url": "s_products_direct_semi.html#th_direct_prod",
  "type": "Theorem",
  "number": "1.182",
  "title": "Characterization of direct products.",
  "body": " Characterization of direct products   A group is isomorphic to a direct product if and only if the conditions below are satisfied.   For all there is a normal subgroup and an isomorphism .    The normal subgroups satisfy .       The forward implication is relatively straightforward. Given , where , define . It is easy to see that the collection satisfy conditions (i) and (ii).  For the reverse implication, given normal subgroups satisfying conditions (i) and (ii), define . We claim is an isomorphism. Once we know is a homomorphism, it is not dificult to show that it is an isomorphism. Indeed, surjectivity follows from ; and injectivity follows from , which implies . That is a homomorphism follow from the fact that if elements from different subgroups commute with one another. We leave the details to the reader.   "
},
{
  "id": "d_internal_direct_product",
  "level": "2",
  "url": "s_products_direct_semi.html#d_internal_direct_product",
  "type": "Definition",
  "number": "1.183",
  "title": "Interal direct product.",
  "body": " Interal direct product   Given a group and normal subgroups satisfying (i) and (ii) of , we say that is the internal direct product of the subgroups .   "
},
{
  "id": "cor_prod_Sylow",
  "level": "2",
  "url": "s_products_direct_semi.html#cor_prod_Sylow",
  "type": "Corollary",
  "number": "1.184",
  "title": "Internal direct products of Sylow subgroups.",
  "body": " Internal direct products of Sylow subgroups   Let be a finite group of cardinality , and let be the distinct prime divisors of . The following conditions are equivalent.    is an internal direct product of its Sylow subgroups.     for all .      "
},
{
  "id": "cor_sylow_abelian",
  "level": "2",
  "url": "s_products_direct_semi.html#cor_sylow_abelian",
  "type": "Corollary",
  "number": "1.185",
  "title": "Sylow theorems for abelian groups.",
  "body": " Sylow theorems for abelian groups   Let be a finite abelian group of cardinality , and let be the prime divisors of .   For each there is a unique -Sylow subgroup of , , and .     is the internal direct product of the . In particular, we have .      "
},
{
  "id": "d_torsion_subgroups",
  "level": "2",
  "url": "s_products_direct_semi.html#d_torsion_subgroups",
  "type": "Definition",
  "number": "1.186",
  "title": "Torsion subgroups.",
  "body": " Torsion subgroups   Let be an abelian group. For all prime numbers , the -torsion subgroup of , denoted is defined as the set of all elements of whose order is a power of : , . The torsion subgroup of is the set of all elements of of finite order.   "
},
{
  "id": "th_structure_finite_abelian",
  "level": "2",
  "url": "s_products_direct_semi.html#th_structure_finite_abelian",
  "type": "Theorem",
  "number": "1.187",
  "title": "Structure of finite abelian groups: elementary divisors.",
  "body": " Structure of finite abelian groups: elementary divisors   Let be a finite abelian group of cardinality , let be the distinct prime divisors of . Assume factors as .    , where is an abelian group of cardinality .    For all there are is a unique sequence of integers satisfying .       In Math 331-2 we will prove a more general result, called the structure theorem for finitely generated modules over PIDs that implies this theorem.   "
},
{
  "id": "s_semidirect_products",
  "level": "1",
  "url": "s_semidirect_products.html",
  "type": "Section",
  "number": "1.24",
  "title": "Semidirect products",
  "body": " Semidirect products   Definitions and theory  Although the definition of an (external) semidirect product might seem overly complicated, it is inspired by a scenario that comes up frequently when investigating groups. Namely, we often are able to locate subgroups with normal, such that and . If is itself normal, then implies that , and we have come a big step forward in our understanding of . But what if is not normal? In this case there is still a bijection between and the Cartesian product , but now the group operations of and the direct product do not necessarily match up! This is because elements of and need not commute with one another, as they do in the direct product .  We can be more precise about this. Since is normal, every element defines an automorphism via conjugation: , for all . Given elements and in we have . Thus, the group structure of together with our bijection between and gives rise to a sort of twisted product on the set , as diagrammed below. This is the origin of the semidirect product construction given in . There is one more detail that appears there that shows up in our setting above as well: the map associating to its corresponding conjugation automorphism is not just a map of sets from to , it is in fact a group homomorphism, as we have shown before.   Semidirect product    semidirect product of and    Let and be groups, and let be a group homomorphism. The semidirect product of and is the group whose underlying set is the Cartesian product and whose group operation is defined as , where is the automorphism .  The identity element of is . Given , its inverse is .    In order to work explicit examples, we will need to get into the nuts and bolts of certain automorphism groups, as well as homomorphisms into those groups. Before we do so, we state and prove an analog to for semidirect products. Roughly, it tells us that descriptions of of the form with normal and are equivalent to isomorphisms between and a semidirect product.   Internal semidirect products   A group is isomorphic to a semidirect product if and only if the following conditions are satisfied.   There is a normal subgroup and subgroup , along with isomorphisms and .     and satisfy .       The reverse implication pretty much follows our discussion above motivating the semidirect product definition. Namely, given conditions (i) and (ii), it is easy to show that the map is an isomorphism, where is the homomorphism that sends to its corresponding conjugation automorphism . That the map is well-defined and bijective follows from the fact that every element in can be written in a unique way in the form , where and . That is a homomorphism follows from the same reasoning we gave above and diagrammed in .  Lastly, the isomorphisms give rise to an isomorphism , where is the homomorphism that sends an element to the automorphism defined as . This is illustrated in the diagram below, which articulates how the automorphism corresponds to conjugation by as an automorphism of .   Diagram illustrating automorphisms of G2    It is clear that is a bijection, since the maps are bijections. We leave the fact that is a homomorphism ( , respects the semidirect product operations of both groups) to the reader. Composing and gives the desired isomorphism from to .  For the forward implication, first observe that if is isomorphic to , then it has subgroups satisfying conditions (i) and (ii) if and only if has such subgroups. Thus, we assume without loss of generality that , and endeavor to find subgroups of satisfying conditions (i) and (ii). We leave it to the reader to verify that do the trick.    Since we will be dealing with automorphism groups, it will be useful to have a result identifying these groups in some familiar cases. We will prove the first two statements in in Math 331-2. The last two statements will not be used much in our examples, and are left as exercises.   Homomorphism set   Let and be groups. The set of all group homomorphisms from to is denoted .     Homomorphisms from cyclic groups   Let be a cyclic group, and let be a group.   If , then the map is a bijection of sets. Equivalently, for all there is a unique such that for all     If , then the map is a bijection of sets. Equivalently, for all there is a unique satisfying such that for all .          Since any satisfies , it is clear that a homomophism is uniquely determined by . This means that the map is an injection. To see that it is a surjection, we claim that for any , the map defined as is a group homomorphism satisfying . As usual, the only real work that needs to be done here is to show that the map map is well defined; and this follows since if and only if .    The proof is similar. Again, it is clear that a homomorphism is uniquely determined by ; furthermore, since , we must have . This proves that the map is an injection from to . Once again that this map is surjective follows from the fact that given any the map defined as is a homomorphism. In this case, the fact that this map is well defined follows from the fact that in we have . We leave the details to the reader.        Automorphism groups      Given a cyclic group of cardinality , the map is an isomorphism. As a result, we have . Additionally, if is prime, then is a cyclic group of cardinality .     for any positive integer .  In particular, .     for all .     for any .       The proof of (1) follows from . We will prove (2) in Math 331-2. The proof of (3) can be found in the text. We leave the proof of (4) to the reader.    The next proposition makes clearer how the choice of affects the semidirect product .   Isomorphic semidirect products   Let and be groups, and let .   If , then , where .    If , then where .          We leave as an exercise for the reader that the map is an isomorphism.    This one is slightly trickier. We leave it as an exercise for the reader to check that an isomorphism is given by the map , where is the automorphism , and is the automorphism .         Classifying groups of given cardinality  We now put all this theory to work with some examples of computing all isomorphism types of groups of a given cardinality.   Groups of cardinality 21   Prove that up to isomorphism there is exactly one abelian group of cardinality and one nonabelian group of cardinality .    Let be a group of cardinality . The usual Sylow theory argument shows that has a unique normal -Sylow subgroup isomorphic to . Let be any -Sylow subgroup. The usual counting argument shows that and . From , we conclude that for some homomorphism .  Let and . From we know that via the correspondence . Note also that is cyclic. Lastly, from , we know that homomorphisms correspond to elements of of order dividing . It follows that there are exactly three such homomorphisms, summarized as follows: . The first homomorphism is the trivial homomorphism, and as such the corresponding semidirect product is isomorphic to the direct product: , . Next, it is not difficult to see that , where is the automorphism defined as . It follows from that . Thus there are at most two distinct groups of cardinality , up to isomorphism: and . We show that the second group is nonabelian, from which the desired result follows. In general if the homomorphism defining the semidirect product is nontrivial, then there will be an element of that does not commute with an element of . In this case, letting and , we have .     Groups of cardinality   Give a classification of all groups of cardinality , up to isomorphism.    Let be a group of cardinality . Recall that either or . We consider the former case.  Let be the unique normal -Sylow subgroup of , and let be a -Sylow subgroup. The usual arguments show that and and thus for some homomorphism .   Case:  . We first consider the case where is cyclic. Reasoning in a manner similar to , the possible homomorphisms from to are . As before, we have . In the second case we have the nonabelian group , where is the nontrivial homomorphism from to . Alternatively, we can describe the group in this case with a presentation. Since encodes how the element conjugates the element in our group , we see that has presentation .   Case:  . Now consider the case where our -Sylow subgroups are isomorphic to the Klein 4-group. We use the presentation , to determine the possible homomorphisms in this case. Such homomorphisms are determined by where and get sent. Since , any choice of image for and gives rise to a unique homomorphism. Thus there are four homomorphisms in total. Let be the trivial homomorphism. In this case we have . We claim the remaining three homomorphisms, each of which is nontrivial, give rise to the same semidirect product, up to isomorphism. This is because for any two of these, say and , we have , where is an automorphism. For example, if and are the homomorphisms , then we have , where is the automorphism of defined as follows: . We conclude that there are exactly two isomorphism types in this case. (Again, if is nontrivial, the resulting semidirect product is nonabelian.) You can show that the second group is isomorphic to .  In all, we see that there are exactly 5 isomorphism types for groups of cardinality 12. We enumerate them below grouped according to the cases of our analysis.   Case:       Case: ,   or , where is nontrivial. In the latter case, has presentation .    Case: ,   or , where is a nontrivial homomorphism.        Groups of cardinality   Give a classification of all groups of cardinality , up to isomorphism.    We have . The usual Sylow arguments show that . Thus has a unique normal -Sylow subgroup . Let . We have (counting argument) and thus (counting argument). It follows from that for some homomorphism . This semidirect products depends both on the isomorphism type of (cyclic or Klein 4-group) and the choice of homomorphism . We proceed by cases based on the isomorphism type of .   Case:  . We have . implies that the elements are in bijective correspondence with elements of of order dividing . Since , we see that there are two of these as summarized below: . The first homomorphism is trivial, leading to the direct product . Since the second homomorphism is nontrivial, the corresponding semidirect product is nonabelian, and in particular is distinct from . Thus there are two isomorphism types for this case.   Case:  . As in , the elements of are in bijective correspondence with pairs of elements of satisfying . Since , we see that that there are exactly two elements of of order dividing . These automorphisms are summarized as follows: . Since is abelian, any pair from among these elements satisfies the necessary condition. This gives rise to a total of 4 distinct homomorphisms , described below: . The first homomorphism is trivial, giving rise to the direct product . The remaining three homomorphisms all differ by an automorphism of , just as in . Thus they each give rise to the same semidirect product, up to isomorphism. Calling the first of these three , we have the nonabelian group .  In all, we see that there are four distinct groups of cardinality , up to isomorphism, as represented by the groups described above. Our analysis shows that these groups are pairwise nonisomorphic: and are abelian, while and are not; and and have a cyclic -Sylow subgroup, while and have noncyclic -Sylow subgroups.  Lastly, to make the nonabelian groups somewhat more explicit, we observe that has presentation . Such a group is called a dicyclic group of degree 7 . Additionally, one can show that . In fact, this must be the case, since is nonabelian and its -Sylow subgroups are noncyclic.     "
},
{
  "id": "spec_semidirect_product",
  "level": "2",
  "url": "s_semidirect_products.html#spec_semidirect_product",
  "type": "Specimen",
  "number": "16",
  "title": "Semidirect product.",
  "body": " Semidirect product    semidirect product of and    Let and be groups, and let be a group homomorphism. The semidirect product of and is the group whose underlying set is the Cartesian product and whose group operation is defined as , where is the automorphism .  The identity element of is . Given , its inverse is .   "
},
{
  "id": "th_internal_semidirect_prod",
  "level": "2",
  "url": "s_semidirect_products.html#th_internal_semidirect_prod",
  "type": "Theorem",
  "number": "1.188",
  "title": "Internal semidirect products.",
  "body": " Internal semidirect products   A group is isomorphic to a semidirect product if and only if the following conditions are satisfied.   There is a normal subgroup and subgroup , along with isomorphisms and .     and satisfy .       The reverse implication pretty much follows our discussion above motivating the semidirect product definition. Namely, given conditions (i) and (ii), it is easy to show that the map is an isomorphism, where is the homomorphism that sends to its corresponding conjugation automorphism . That the map is well-defined and bijective follows from the fact that every element in can be written in a unique way in the form , where and . That is a homomorphism follows from the same reasoning we gave above and diagrammed in .  Lastly, the isomorphisms give rise to an isomorphism , where is the homomorphism that sends an element to the automorphism defined as . This is illustrated in the diagram below, which articulates how the automorphism corresponds to conjugation by as an automorphism of .   Diagram illustrating automorphisms of G2    It is clear that is a bijection, since the maps are bijections. We leave the fact that is a homomorphism ( , respects the semidirect product operations of both groups) to the reader. Composing and gives the desired isomorphism from to .  For the forward implication, first observe that if is isomorphic to , then it has subgroups satisfying conditions (i) and (ii) if and only if has such subgroups. Thus, we assume without loss of generality that , and endeavor to find subgroups of satisfying conditions (i) and (ii). We leave it to the reader to verify that do the trick.   "
},
{
  "id": "d_hom_set",
  "level": "2",
  "url": "s_semidirect_products.html#d_hom_set",
  "type": "Definition",
  "number": "1.189",
  "title": "Homomorphism set.",
  "body": " Homomorphism set   Let and be groups. The set of all group homomorphisms from to is denoted .   "
},
{
  "id": "prop_homs_cyclic",
  "level": "2",
  "url": "s_semidirect_products.html#prop_homs_cyclic",
  "type": "Proposition",
  "number": "1.190",
  "title": "Homomorphisms from cyclic groups.",
  "body": " Homomorphisms from cyclic groups   Let be a cyclic group, and let be a group.   If , then the map is a bijection of sets. Equivalently, for all there is a unique such that for all     If , then the map is a bijection of sets. Equivalently, for all there is a unique satisfying such that for all .          Since any satisfies , it is clear that a homomophism is uniquely determined by . This means that the map is an injection. To see that it is a surjection, we claim that for any , the map defined as is a group homomorphism satisfying . As usual, the only real work that needs to be done here is to show that the map map is well defined; and this follows since if and only if .    The proof is similar. Again, it is clear that a homomorphism is uniquely determined by ; furthermore, since , we must have . This proves that the map is an injection from to . Once again that this map is surjective follows from the fact that given any the map defined as is a homomorphism. In this case, the fact that this map is well defined follows from the fact that in we have . We leave the details to the reader.      "
},
{
  "id": "th_automorphism_groups",
  "level": "2",
  "url": "s_semidirect_products.html#th_automorphism_groups",
  "type": "Proposition",
  "number": "1.191",
  "title": "Automorphism groups.",
  "body": " Automorphism groups      Given a cyclic group of cardinality , the map is an isomorphism. As a result, we have . Additionally, if is prime, then is a cyclic group of cardinality .     for any positive integer .  In particular, .     for all .     for any .       The proof of (1) follows from . We will prove (2) in Math 331-2. The proof of (3) can be found in the text. We leave the proof of (4) to the reader.   "
},
{
  "id": "prop_semi_choice",
  "level": "2",
  "url": "s_semidirect_products.html#prop_semi_choice",
  "type": "Proposition",
  "number": "1.192",
  "title": "Isomorphic semidirect products.",
  "body": " Isomorphic semidirect products   Let and be groups, and let .   If , then , where .    If , then where .          We leave as an exercise for the reader that the map is an isomorphism.    This one is slightly trickier. We leave it as an exercise for the reader to check that an isomorphism is given by the map , where is the automorphism , and is the automorphism .      "
},
{
  "id": "eg_groups_card_21",
  "level": "2",
  "url": "s_semidirect_products.html#eg_groups_card_21",
  "type": "Example",
  "number": "1.193",
  "title": "Groups of cardinality 21.",
  "body": " Groups of cardinality 21   Prove that up to isomorphism there is exactly one abelian group of cardinality and one nonabelian group of cardinality .    Let be a group of cardinality . The usual Sylow theory argument shows that has a unique normal -Sylow subgroup isomorphic to . Let be any -Sylow subgroup. The usual counting argument shows that and . From , we conclude that for some homomorphism .  Let and . From we know that via the correspondence . Note also that is cyclic. Lastly, from , we know that homomorphisms correspond to elements of of order dividing . It follows that there are exactly three such homomorphisms, summarized as follows: . The first homomorphism is the trivial homomorphism, and as such the corresponding semidirect product is isomorphic to the direct product: , . Next, it is not difficult to see that , where is the automorphism defined as . It follows from that . Thus there are at most two distinct groups of cardinality , up to isomorphism: and . We show that the second group is nonabelian, from which the desired result follows. In general if the homomorphism defining the semidirect product is nontrivial, then there will be an element of that does not commute with an element of . In this case, letting and , we have .   "
},
{
  "id": "eg_groups_card_12",
  "level": "2",
  "url": "s_semidirect_products.html#eg_groups_card_12",
  "type": "Example",
  "number": "1.194",
  "title": "Groups of cardinality <span class=\"process-math\">\\(12\\)<\/span>.",
  "body": " Groups of cardinality   Give a classification of all groups of cardinality , up to isomorphism.    Let be a group of cardinality . Recall that either or . We consider the former case.  Let be the unique normal -Sylow subgroup of , and let be a -Sylow subgroup. The usual arguments show that and and thus for some homomorphism .   Case:  . We first consider the case where is cyclic. Reasoning in a manner similar to , the possible homomorphisms from to are . As before, we have . In the second case we have the nonabelian group , where is the nontrivial homomorphism from to . Alternatively, we can describe the group in this case with a presentation. Since encodes how the element conjugates the element in our group , we see that has presentation .   Case:  . Now consider the case where our -Sylow subgroups are isomorphic to the Klein 4-group. We use the presentation , to determine the possible homomorphisms in this case. Such homomorphisms are determined by where and get sent. Since , any choice of image for and gives rise to a unique homomorphism. Thus there are four homomorphisms in total. Let be the trivial homomorphism. In this case we have . We claim the remaining three homomorphisms, each of which is nontrivial, give rise to the same semidirect product, up to isomorphism. This is because for any two of these, say and , we have , where is an automorphism. For example, if and are the homomorphisms , then we have , where is the automorphism of defined as follows: . We conclude that there are exactly two isomorphism types in this case. (Again, if is nontrivial, the resulting semidirect product is nonabelian.) You can show that the second group is isomorphic to .  In all, we see that there are exactly 5 isomorphism types for groups of cardinality 12. We enumerate them below grouped according to the cases of our analysis.   Case:       Case: ,   or , where is nontrivial. In the latter case, has presentation .    Case: ,   or , where is a nontrivial homomorphism.      "
},
{
  "id": "eg_groups_card_28",
  "level": "2",
  "url": "s_semidirect_products.html#eg_groups_card_28",
  "type": "Example",
  "number": "1.195",
  "title": "Groups of cardinality <span class=\"process-math\">\\(28\\)<\/span>.",
  "body": " Groups of cardinality   Give a classification of all groups of cardinality , up to isomorphism.    We have . The usual Sylow arguments show that . Thus has a unique normal -Sylow subgroup . Let . We have (counting argument) and thus (counting argument). It follows from that for some homomorphism . This semidirect products depends both on the isomorphism type of (cyclic or Klein 4-group) and the choice of homomorphism . We proceed by cases based on the isomorphism type of .   Case:  . We have . implies that the elements are in bijective correspondence with elements of of order dividing . Since , we see that there are two of these as summarized below: . The first homomorphism is trivial, leading to the direct product . Since the second homomorphism is nontrivial, the corresponding semidirect product is nonabelian, and in particular is distinct from . Thus there are two isomorphism types for this case.   Case:  . As in , the elements of are in bijective correspondence with pairs of elements of satisfying . Since , we see that that there are exactly two elements of of order dividing . These automorphisms are summarized as follows: . Since is abelian, any pair from among these elements satisfies the necessary condition. This gives rise to a total of 4 distinct homomorphisms , described below: . The first homomorphism is trivial, giving rise to the direct product . The remaining three homomorphisms all differ by an automorphism of , just as in . Thus they each give rise to the same semidirect product, up to isomorphism. Calling the first of these three , we have the nonabelian group .  In all, we see that there are four distinct groups of cardinality , up to isomorphism, as represented by the groups described above. Our analysis shows that these groups are pairwise nonisomorphic: and are abelian, while and are not; and and have a cyclic -Sylow subgroup, while and have noncyclic -Sylow subgroups.  Lastly, to make the nonabelian groups somewhat more explicit, we observe that has presentation . Such a group is called a dicyclic group of degree 7 . Additionally, one can show that . In fact, this must be the case, since is nonabelian and its -Sylow subgroups are noncyclic.   "
},
{
  "id": "s_rings",
  "level": "1",
  "url": "s_rings.html",
  "type": "Section",
  "number": "2.1",
  "title": "Rings",
  "body": " Rings  In a sense the motivation for the mathematical definition of a ring in mathematics is more immediate than that for a group. From very early on in our mathematical training we are introduced to quite a rich variety of different number systems including the integers , the rational numbers , the real numbers , and the complex numbers . Roughly understood, a number system is a set together with two distinct operations, addition and multiplication, which are each reasonably well-behaved and moreover play nicely together. makes precise exactly what me mean by this.   Ring   A ring is a triple , where is a nonempty set, and and are binary operations , called ring addition and ring multiplication , respectively, that satisfy the following axioms.    is an abelian group.    Ring multiplication is associative: , for all .    Ring multiplication distributes over ring addition: , we have for all .    There is a multiplicative identity element satisfying for all .   A ring is commutative if its ring multiplication is commutative and noncommutative otherwise.     The Dummit and Foote text does not include (iv) as one of the axioms a ring needs to satisfy. Instead it distinguishes between rings with and without identity . We will not follow suit and will conscientiously point out resulting discrepancies between our exposition and the book’s.    Addition in a ring will always be denoted by , and this notation will never be suppressed. In contrast, we are free to denote the ring multiplication operation in any manner we please, but will more often than not omit the notation in ring expressions.  Additionally we will use the following integer multiple notation: . Additionally, in a ring we will denote for all .   As mentioned at the top, our definition of a ring is chosen to generalize the familiar number systems ( , , , ) of our mathematical youth. That these sets are rings (indeed, commutative rings) with respect to their usual arithmetic operations is a result of arithmetic properties you learned long ago. We add to this collection the slightly more exotic modular rings for a positive integer; the ring axiom identities for modular addition and multiplication follow directly from the corresponding identities for the integer operations.   Elementary commutative rings   The sets , , , and are all commutative rings with respect to their usual addition and multiplication operations. Additionally, for any positive integer , the set is a commutative ring with respect to its modular addition and multiplication operations.     Trivial ring   Show that a singleton can be given a unique ring structure. We call such rings trivial .  Show that a ring is trivial if and only if the equality holds in .    Left to the reader.    We need not travel too far to find an examples of noncommutative rings. Matrix arithmetic furnishes us with a familiar enough example.   Matrix rings   Let be a commutative ring. Given a positive integer , we define to be the set of all matrices with coefficients in .  Given matrices , we define their sum and product as follows: . The triple , where and are the matrix addition and multiplication operations defined above, is a ring called the ring of matrices over (or with coefficients in ).  If , then is a noncommutative ring, as an argument very similar to the one in shows.     Matrix rings  We can remove the restriction that be commutative in . In other words, the matrix operations satisfy the ring axioms whether or not is commutative. We will restrict our attention to the case where is commutative, however, as here the algebraic properties of are somewhat simpler. In particular, when is commutative, we can define a determinant function in the usual fashion, and enjoys essentially all of the properties you are familiar with in the case where . See below.   We now dispense with the usual general properties result for our newly defined mathematical friends.   Ring properties   Let be a ring.   The multiplicative identity element of is unique: , there is exactly one element of satisfying the identity .     for all .     for all .     for all .       We prove (1) and (2), leaving (3) and (4) to the reader.   If an element satisfies for all , then in particular, it satisfies . But by definition of the the multiplicative identity, we have . Thus , as desired.    We have . Using the additive inverse , we see that , as desired. A similar argument shows $a0=0$.       Our matrix ring example is in fact an example of a ring construction : a method of building new rings from existing ones. The product ring construction is another such example.   Product rings   Let be a nonempty set, and let be a family of rings indexed by . We define an addition and multiplication operation on as follows: . In other words, addition and multiplication of tuples is defined component-wise.  The triple is ring called the product of the rings . Note that we have already seen that is a group. (See .) The identity element of is the tuple , where for all , is the identity element of .    Technically speaking, the ring of functions construction introduced next is just a special case of the product ring construction: that is, by definition we have . We include it nonetheless, as this construction (in this particular guise) is particular important in analysis contexts.   Ring of functions   Let be a ring, let be a nonempty set, and let be the set of all functions from to . Given functions we define their sum and product as follows: . The triple , where and are the function addition and multiplication operations defined above, is a ring called the ring of functions from to .  The additive identity of is the zero function defined as for all ; the multiplicative identity of is the constant function defined as for all .    Another method of building a new ring from an existing one is to identify a subring .   Subring   A subset of the ring is a subring if it satisfies the following conditions.    is a subgroup of .     .     is closed under multiplication: , for all , we have .   It follows from the ring axioms that a subring of is itself a ring with respect to ring operations of , restricted to .     Quadratic extensions of   Let be a rational number that does not have a rational square root, and let denote one of the two square roots of lying in . We denote by the subset of consisting of all rational linear combinations of and : , . The set is a subring of , and hence a ring in its own right.     Center of ring   The center of a ring , denoted , is the set of elements of that commute with all elements of : , .     Center of a ring   Let be a ring. Show that is a subring of .    First we show that is a subring of . From we know that . Next, assume . Given any , we have , and thus .  Next, we have by . Finally, we show that is closed under multiplication. Assume . Given , we have , showing , as desired.    "
},
{
  "id": "d_ring",
  "level": "2",
  "url": "s_rings.html#d_ring",
  "type": "Definition",
  "number": "2.1",
  "title": "Ring.",
  "body": " Ring   A ring is a triple , where is a nonempty set, and and are binary operations , called ring addition and ring multiplication , respectively, that satisfy the following axioms.    is an abelian group.    Ring multiplication is associative: , for all .    Ring multiplication distributes over ring addition: , we have for all .    There is a multiplicative identity element satisfying for all .   A ring is commutative if its ring multiplication is commutative and noncommutative otherwise.   "
},
{
  "id": "s_rings-4",
  "level": "2",
  "url": "s_rings.html#s_rings-4",
  "type": "Warning",
  "number": "2.2",
  "title": "",
  "body": " The Dummit and Foote text does not include (iv) as one of the axioms a ring needs to satisfy. Instead it distinguishes between rings with and without identity . We will not follow suit and will conscientiously point out resulting discrepancies between our exposition and the book’s.  "
},
{
  "id": "s_rings-5",
  "level": "2",
  "url": "s_rings.html#s_rings-5",
  "type": "Notation",
  "number": "2.3",
  "title": "",
  "body": " Addition in a ring will always be denoted by , and this notation will never be suppressed. In contrast, we are free to denote the ring multiplication operation in any manner we please, but will more often than not omit the notation in ring expressions.  Additionally we will use the following integer multiple notation: . Additionally, in a ring we will denote for all .  "
},
{
  "id": "spec_elem_comm_rings",
  "level": "2",
  "url": "s_rings.html#spec_elem_comm_rings",
  "type": "Specimen",
  "number": "17",
  "title": "Elementary commutative rings.",
  "body": " Elementary commutative rings   The sets , , , and are all commutative rings with respect to their usual addition and multiplication operations. Additionally, for any positive integer , the set is a commutative ring with respect to its modular addition and multiplication operations.   "
},
{
  "id": "eg_trivial_ring",
  "level": "2",
  "url": "s_rings.html#eg_trivial_ring",
  "type": "Example",
  "number": "2.4",
  "title": "Trivial ring.",
  "body": " Trivial ring   Show that a singleton can be given a unique ring structure. We call such rings trivial .  Show that a ring is trivial if and only if the equality holds in .    Left to the reader.   "
},
{
  "id": "spec_matrix_rings",
  "level": "2",
  "url": "s_rings.html#spec_matrix_rings",
  "type": "Specimen",
  "number": "18",
  "title": "Matrix rings.",
  "body": " Matrix rings   Let be a commutative ring. Given a positive integer , we define to be the set of all matrices with coefficients in .  Given matrices , we define their sum and product as follows: . The triple , where and are the matrix addition and multiplication operations defined above, is a ring called the ring of matrices over (or with coefficients in ).  If , then is a noncommutative ring, as an argument very similar to the one in shows.   "
},
{
  "id": "s_rings-11",
  "level": "2",
  "url": "s_rings.html#s_rings-11",
  "type": "Remark",
  "number": "2.5",
  "title": "Matrix rings.",
  "body": " Matrix rings  We can remove the restriction that be commutative in . In other words, the matrix operations satisfy the ring axioms whether or not is commutative. We will restrict our attention to the case where is commutative, however, as here the algebraic properties of are somewhat simpler. In particular, when is commutative, we can define a determinant function in the usual fashion, and enjoys essentially all of the properties you are familiar with in the case where . See below.  "
},
{
  "id": "prop_ring_props",
  "level": "2",
  "url": "s_rings.html#prop_ring_props",
  "type": "Proposition",
  "number": "2.6",
  "title": "Ring properties.",
  "body": " Ring properties   Let be a ring.   The multiplicative identity element of is unique: , there is exactly one element of satisfying the identity .     for all .     for all .     for all .       We prove (1) and (2), leaving (3) and (4) to the reader.   If an element satisfies for all , then in particular, it satisfies . But by definition of the the multiplicative identity, we have . Thus , as desired.    We have . Using the additive inverse , we see that , as desired. A similar argument shows $a0=0$.      "
},
{
  "id": "spec_ring_product",
  "level": "2",
  "url": "s_rings.html#spec_ring_product",
  "type": "Specimen",
  "number": "19",
  "title": "Product rings.",
  "body": " Product rings   Let be a nonempty set, and let be a family of rings indexed by . We define an addition and multiplication operation on as follows: . In other words, addition and multiplication of tuples is defined component-wise.  The triple is ring called the product of the rings . Note that we have already seen that is a group. (See .) The identity element of is the tuple , where for all , is the identity element of .   "
},
{
  "id": "spec_ring_of_functions",
  "level": "2",
  "url": "s_rings.html#spec_ring_of_functions",
  "type": "Specimen",
  "number": "20",
  "title": "Ring of functions.",
  "body": " Ring of functions   Let be a ring, let be a nonempty set, and let be the set of all functions from to . Given functions we define their sum and product as follows: . The triple , where and are the function addition and multiplication operations defined above, is a ring called the ring of functions from to .  The additive identity of is the zero function defined as for all ; the multiplicative identity of is the constant function defined as for all .   "
},
{
  "id": "d_subring",
  "level": "2",
  "url": "s_rings.html#d_subring",
  "type": "Definition",
  "number": "2.7",
  "title": "Subring.",
  "body": " Subring   A subset of the ring is a subring if it satisfies the following conditions.    is a subgroup of .     .     is closed under multiplication: , for all , we have .   It follows from the ring axioms that a subring of is itself a ring with respect to ring operations of , restricted to .   "
},
{
  "id": "spec_quadratic_fields",
  "level": "2",
  "url": "s_rings.html#spec_quadratic_fields",
  "type": "Specimen",
  "number": "21",
  "title": "Quadratic extensions of <span class=\"process-math\">\\(\\Q\\)<\/span>.",
  "body": " Quadratic extensions of   Let be a rational number that does not have a rational square root, and let denote one of the two square roots of lying in . We denote by the subset of consisting of all rational linear combinations of and : , . The set is a subring of , and hence a ring in its own right.   "
},
{
  "id": "d_ring_center",
  "level": "2",
  "url": "s_rings.html#d_ring_center",
  "type": "Definition",
  "number": "2.8",
  "title": "Center of ring.",
  "body": " Center of ring   The center of a ring , denoted , is the set of elements of that commute with all elements of : , .   "
},
{
  "id": "eg_center",
  "level": "2",
  "url": "s_rings.html#eg_center",
  "type": "Example",
  "number": "2.9",
  "title": "Center of a ring.",
  "body": " Center of a ring   Let be a ring. Show that is a subring of .    First we show that is a subring of . From we know that . Next, assume . Given any , we have , and thus .  Next, we have by . Finally, we show that is closed under multiplication. Assume . Given , we have , showing , as desired.   "
},
{
  "id": "s_subrings_units_divisors",
  "level": "1",
  "url": "s_subrings_units_divisors.html",
  "type": "Section",
  "number": "2.2",
  "title": "Subrings, units, zero divisors",
  "body": " Subrings, units, zero divisors  We will now discuss various types of special ring elements, starting with units.   Units and multiplicative inverses   Let be an element of the nontrivial ring . A multiplicative inverse of is an element satisfying . We denote in this case. The element is a unit (or is invertible ) if it has a multiplicative inverse. We denote by the set of all units of : , . It follows directly from the ring axioms that is a group with respect to the ring multiplication operation.    As we have intimated on multiple occasions, the ring , for an arbitrary commutative ring, behaves very much like the ring . Let's make official some of these similarities, postponing a proof until later in the course. At some point we will be able to use our ring theory to prove a universal identity result allowing us to transfer certain familiar properties of familiar rings defined over or (meaning to be revealed later) and import these to analogous rings defined over an arbitrary commutative ring .   Matrix ring goodies   Let be a nontrivial commutative ring and let be a positive integer.   We can define a determinant function that can be computed by the usual expansion formula along any row or column of a matrix.     for all .    For all there is a matrix , called the adjoint matrix of , satisfying .    For all , is invertible if and only if .       Postponed.     General linear group   Let be a nontrivial commutative ring, and let be a positive integer. We denote by the group of units of : , .     Units in product rings      Let be a product ring . Prove: .     for some nonempty set . Prove: .       Left to the reader.     Division rings and fields   A nontrivial ring is a division ring if every nonzero element of is a unit: , . A field is a commutative division ring.     Division rings   Determine whether the given ring is a division ring, and whether it is a field.                        for a positive integer. The answer depends on .     , where does not have a square root in .     , for a commutative ring and .       We mainly leave this to the reader, restricting our comments to the rings , , and .  We showed previously that , from whence it easily follows that is a field if and only if is a prime integer.  We claim is a field. Assume is a nonzero element of . This is true if and only if or . (If and or is nonzero, then we could write or ). Contradiction.) Let . We have , and this is nonzero, since otherwise we would have , contradicting the fact that is not a square in . Thus has inverse .  Lastly, from , we know that is invertible if and only if . Assuming , it is easy to construct a nonzero matrix with . Thus is not a division ring.     Having shown that is a field for a prime integer, we will write from now on.    Zero divisors and integral domains   Let be a ring. A nonzero element is a zero divisor if there exists a nonzero element satisfying or .  A ring is an integral domain if it is (i) commutative, and (ii) contains no zero divisors.     Zero divisors   For each of the rings in , determine all zero divisors and determine whether the ring is an integral domain.    We leave most of this to the reader.  One interesting observation is that has zero divisors if and only if is not prime. It follows that is a field if and only if is an integral domain! This interesting fact is generalized in below.  We are tempted to say that is a zero divisor if and only if is either zero or a zero divisor of . Indeed, this is the case! However, even with at our disposal, one of the implications involved is somewhat involved. The easy direction is the forward one: if is a a zero divisor, then there is a nonzero matrix such that ; multiplying on the left by the adjoint matrix , we see that . Since , it follows that is either zero or a zero divisor in .  Although you might guess that this same argument could be employed to prove the reverse implication, we are foiled by the fact that can be the zero matrix even when is nonzero! (This is true even in the familiar setting .) The reader is invited to check out this StackExchange post, which provides an answer as well as some useful references.     Cancellation of non-zero divisors   Assume is a nonzero element of the ring and is not a zero divisor. For all if or , then . Using logical shorthand: .     Finite integral domains   Let be a finite commutative ring. The following statements are equivalent.    is an integral domain.     is a field.            Nilpotents and idempotents   An element of the ring is nilpotent if for some positive integer ; it is idempotent if .    "
},
{
  "id": "d_units",
  "level": "2",
  "url": "s_subrings_units_divisors.html#d_units",
  "type": "Definition",
  "number": "2.10",
  "title": "Units and multiplicative inverses.",
  "body": " Units and multiplicative inverses   Let be an element of the nontrivial ring . A multiplicative inverse of is an element satisfying . We denote in this case. The element is a unit (or is invertible ) if it has a multiplicative inverse. We denote by the set of all units of : , . It follows directly from the ring axioms that is a group with respect to the ring multiplication operation.   "
},
{
  "id": "th_matrix_rings",
  "level": "2",
  "url": "s_subrings_units_divisors.html#th_matrix_rings",
  "type": "Theorem",
  "number": "2.11",
  "title": "Matrix ring goodies.",
  "body": " Matrix ring goodies   Let be a nontrivial commutative ring and let be a positive integer.   We can define a determinant function that can be computed by the usual expansion formula along any row or column of a matrix.     for all .    For all there is a matrix , called the adjoint matrix of , satisfying .    For all , is invertible if and only if .       Postponed.   "
},
{
  "id": "spec_gen_lin_group_general",
  "level": "2",
  "url": "s_subrings_units_divisors.html#spec_gen_lin_group_general",
  "type": "Specimen",
  "number": "22",
  "title": "General linear group.",
  "body": " General linear group   Let be a nontrivial commutative ring, and let be a positive integer. We denote by the group of units of : , .   "
},
{
  "id": "eg_units_product",
  "level": "2",
  "url": "s_subrings_units_divisors.html#eg_units_product",
  "type": "Example",
  "number": "2.12",
  "title": "Units in product rings.",
  "body": " Units in product rings      Let be a product ring . Prove: .     for some nonempty set . Prove: .       Left to the reader.   "
},
{
  "id": "d_division_rings_fields",
  "level": "2",
  "url": "s_subrings_units_divisors.html#d_division_rings_fields",
  "type": "Definition",
  "number": "2.13",
  "title": "Division rings and fields.",
  "body": " Division rings and fields   A nontrivial ring is a division ring if every nonzero element of is a unit: , . A field is a commutative division ring.   "
},
{
  "id": "eg_division_rings",
  "level": "2",
  "url": "s_subrings_units_divisors.html#eg_division_rings",
  "type": "Example",
  "number": "2.14",
  "title": "Division rings.",
  "body": " Division rings   Determine whether the given ring is a division ring, and whether it is a field.                        for a positive integer. The answer depends on .     , where does not have a square root in .     , for a commutative ring and .       We mainly leave this to the reader, restricting our comments to the rings , , and .  We showed previously that , from whence it easily follows that is a field if and only if is a prime integer.  We claim is a field. Assume is a nonzero element of . This is true if and only if or . (If and or is nonzero, then we could write or ). Contradiction.) Let . We have , and this is nonzero, since otherwise we would have , contradicting the fact that is not a square in . Thus has inverse .  Lastly, from , we know that is invertible if and only if . Assuming , it is easy to construct a nonzero matrix with . Thus is not a division ring.   "
},
{
  "id": "s_subrings_units_divisors-10",
  "level": "2",
  "url": "s_subrings_units_divisors.html#s_subrings_units_divisors-10",
  "type": "Notation",
  "number": "2.15",
  "title": "",
  "body": " Having shown that is a field for a prime integer, we will write from now on.  "
},
{
  "id": "d_zero_divisors",
  "level": "2",
  "url": "s_subrings_units_divisors.html#d_zero_divisors",
  "type": "Definition",
  "number": "2.16",
  "title": "Zero divisors and integral domains.",
  "body": " Zero divisors and integral domains   Let be a ring. A nonzero element is a zero divisor if there exists a nonzero element satisfying or .  A ring is an integral domain if it is (i) commutative, and (ii) contains no zero divisors.   "
},
{
  "id": "eg_zero_divisors",
  "level": "2",
  "url": "s_subrings_units_divisors.html#eg_zero_divisors",
  "type": "Example",
  "number": "2.17",
  "title": "Zero divisors.",
  "body": " Zero divisors   For each of the rings in , determine all zero divisors and determine whether the ring is an integral domain.    We leave most of this to the reader.  One interesting observation is that has zero divisors if and only if is not prime. It follows that is a field if and only if is an integral domain! This interesting fact is generalized in below.  We are tempted to say that is a zero divisor if and only if is either zero or a zero divisor of . Indeed, this is the case! However, even with at our disposal, one of the implications involved is somewhat involved. The easy direction is the forward one: if is a a zero divisor, then there is a nonzero matrix such that ; multiplying on the left by the adjoint matrix , we see that . Since , it follows that is either zero or a zero divisor in .  Although you might guess that this same argument could be employed to prove the reverse implication, we are foiled by the fact that can be the zero matrix even when is nonzero! (This is true even in the familiar setting .) The reader is invited to check out this StackExchange post, which provides an answer as well as some useful references.   "
},
{
  "id": "prop_zero_divisors_cancellation",
  "level": "2",
  "url": "s_subrings_units_divisors.html#prop_zero_divisors_cancellation",
  "type": "Proposition",
  "number": "2.18",
  "title": "Cancellation of non-zero divisors.",
  "body": " Cancellation of non-zero divisors   Assume is a nonzero element of the ring and is not a zero divisor. For all if or , then . Using logical shorthand: .   "
},
{
  "id": "th_finite_rings_fields",
  "level": "2",
  "url": "s_subrings_units_divisors.html#th_finite_rings_fields",
  "type": "Theorem",
  "number": "2.19",
  "title": "Finite integral domains.",
  "body": " Finite integral domains   Let be a finite commutative ring. The following statements are equivalent.    is an integral domain.     is a field.          "
},
{
  "id": "d_nilpotents_idempotents",
  "level": "2",
  "url": "s_subrings_units_divisors.html#d_nilpotents_idempotents",
  "type": "Definition",
  "number": "2.20",
  "title": "Nilpotents and idempotents.",
  "body": " Nilpotents and idempotents   An element of the ring is nilpotent if for some positive integer ; it is idempotent if .   "
},
{
  "id": "s_grouprings_polys",
  "level": "1",
  "url": "s_grouprings_polys.html",
  "type": "Section",
  "number": "2.3",
  "title": "Group rings, polynomials, power series",
  "body": " Group rings, polynomials, power series   In this section and the next we introduce three ring constructions: group rings, polynomial (and power series) rings, and Hamilton quaternion rings. Each of these uses as an underlying set a collection of formal sums with coefficients in a base ring . This somewhat ambiguous language of formal sums comes up frequently in mathematics. As we make official with a formal sum is really just a tuple that we have decided to write using summation notation. The definition of the complex numbers is a typical example of this phenomenon: complex numbers are usually defined as a formal sum where , when in essence a complex number is just a pair . Why not just use tuple notation? We tend to reach for the formal sum notation in situations where there is a (well-behaved) multiplication defined on our tuples, which further more respects the component-wise addition of these tuples. In these situations algebraic manipulation often proceeds more smoothly with the formal sum representation of objects, as opposed to the tuple representation.   Formal sums are tuples   Let be a ring, and let be a nonempty set. A formal sum of the form is just alternative notation for the tuple . As a very important consequence of this identification, formal sums inherit a coefficient-wise notion of equality from tuples. That is, we have . As a form of shortening, when expanding out a formal sum we will often drop terms where . Similarly, we sometimes drop the in an expression like , writing just instead.      Group rings   Group rings   Let be a nontrivial commutative ring, and let be a finite group. We define to be the set of all formal sums , where for all , and we define binary operations and as follows: . The triple is a ring called the group ring of with coefficients in . The additive and multiplicative identities of are given as .     Group rings     The subset is easily seen to be a subring of . Indeed, using the definition of the group ring operations, we see that . Thus we can think of the subring as a copy of living as a subset of . (Later we will be able to say that this subring is isomorphic to .) By slight abuse of notation, we will identify with this subring of , and sometimes drop the from the notation .    From the group ring operations definition, it follows that . Identifying with , we see that .    We can also think of the group as sitting inside , using the identification . We call such elements of  group elements . With this identification in place, we that the ring multiplication on extends the group operation of . That is, given , identifying these as the ring elements and and taking their product, we see that . As a result, it is easy to see that a group element is invertible with inverse the group element . It follows that we can think of as a subgroup of the group of units of (with respect to our identification): , .    Combining the previous observations, we can now give a decent motivation for the multiplication operation on . Namely, it is the unique binary operation on satisfying the following properties:   it distributes over the given addition operation on ;    it extends the group operation in the sense that ;    we have for all with respect to this multiplication.   In this sense our multiplication operation is the unique way of extending the group operation of to a ring operation on in such a way that our copy of lies in the center of .       Group ring of   Let , and consider the group ring .   Let and . Compute and .    Show that is a unit in        When computing an explicit product in a group ring, instead of using the formal definition in , it is usually easiest to expand out using distributivity, use the fact that the ring coefficients commute with everything and that the ring product of group elements is given by the group product, and the collect like terms.   We have . Observe that : no great surprise in light of .    First observe that is a unit in with inverse . (See .) Since , it suffices to show that is a unit of . (If and are units, then so is .) Playing around with some expressions, we find that . Thus is a unit. We conclude that is a unit, with inverse .        Group rings over a field  Let be a field, and let be a group of cardinality . In this case the group ring has the additional structure of a -vector space, where vector addition is just the ring addition, and scalar multiplication by an element is defined as ring multiplication by the element . In fact, identifying elements of as tuples via the correspondence , we see that as a vector space, is literally equal to the vector space of -tuples with coefficients in with its usual vector operations: . As you will see on your homework, this added vector space structure gives us additional tools for studying group rings over fields.    Group ring properties   Let be a nontrivial commutative ring, and let be a finite group.   Prove that is commutative if and only if is abelian.    Consider the element . Compute , where is an element of .    Let be a nontrivial element. Show that is a zero divisor.    When is a group ring a division ring?       Let be the distinct elements of . To distinguish between the group operation and ring multiplication, we will use concatenation for the group operation and for the ring operation.   Assume that is commutative. For all , we have . Thus is abelian.  Now assume is abelian. Given , expanding out using distributivity and commutativity of ring coefficients, we have . Thus is commutative.    We have , where the penultimate line follows since as runs through all elements of , so too does .  Observe that if is nontrivial, the taking , the equality implies that is noninvertible: if it were, we could cancel it to conclude , a contradiction.    We have . Since and are both nonzero elements of , we conclude that is a zero divisor (as is ).    Both (2) and (3) imply that is a division ring if and only if is trivial and is a field.         Polynomials and power series  Whereas normally power series are introduced as a sort of generalization of polynomials, we will take the approach of defining the notion of a ring of power series, and identify a subring as the ring of polynomials.   Power series ring   Let be a nontrivial commutative ring. We define the set to be the set of all formal sums of the form , where for all , and we define binary operations and as follows: . The triple is a commutative ring called the power series ring over (or with coefficients in) in the unknown (or indeterminate) . The additive and multiplicative identities of are given as . Given a power series , we call its -th term , and its -th coefficient .  We will use function-like notation to name power series. In more detail, we will refer to power series using function letters like and , and will write when explicitly introducing names of coefficients.     Power series equality  When are two power series and equal? Identifying these formal sums as tuples , , following , we see that .   We now identify the ring of polynomials over as the subring of consisting of all power series whose coefficients are eventually equal to zero.   Polynomial rings   Let be a nontrivial commutative ring. Define the polynomial ring over in the indeterminate to be the subset of all power series whose coefficients are eventually equal to zero: i.e., . It is easy to see that is a subring of , and thus a ring in its own right. Restricted to , the power series multiplication rule becomes the familiar polynomial multiplication rule: . As illustrated above, when denoting polynomials we will usually drop all the terms with zero coefficients: , , or .  Given a nonzero polynomial , we define its degree , , to be the largest satisfying . If , we define .  If is a polynomial of degree , we call the leading coefficient of . A polynomial with leading coefficient equal to is called monic .     Polynomial and power series rings  When working with a power series ring , we will identify the ring with power series of the form . Since this identification preserves the ring operations of , we end up with a chain of subring inclusions .   The degree operation on turns out to be very useful, thanks in part to the properties articulated in the following proposition.   Polynomial degree properties   Let be a nontrivial commutative ring, and let and be nonzero polynomials in .    , with equality if is an integral domain.     .          Assume and , so that , where and . From the polynomial multiplication rule given in , we see that . It follows that . If is an integral domain, then and thus .    The proof is left to the reader.        Polynomial degree   Find polynomials satisfying .    Let and . We have and .    As a first illustration of the utility of the degree operation, we show that the polynomial ring construction preserves the integral domain property.   Intregral polynomial rings   Let be a nontrivial commutative ring. The following statements are equivalent.    is an integral domain.     is an integral domain.     is an integral domain.       Since clearly a subring of an integral domain is an integral domain, we have (3) (2) (1). It remains only to show (1) (3).  Assume is an integral domain. Given nonzero elements , we can write , where . But then . Since is an integral domain, and since , we conclude that , as desired.     Units of polynomial and power series rings   Let be a nontrivial commutative ring.   Show that is a unit if and only if .    Prove: if is an integral domain, then .       Left as an exercise.     "
},
{
  "id": "fiat_formal_sums",
  "level": "2",
  "url": "s_grouprings_polys.html#fiat_formal_sums",
  "type": "Fiat",
  "number": "2.21",
  "title": "Formal sums are tuples.",
  "body": " Formal sums are tuples   Let be a ring, and let be a nonempty set. A formal sum of the form is just alternative notation for the tuple . As a very important consequence of this identification, formal sums inherit a coefficient-wise notion of equality from tuples. That is, we have . As a form of shortening, when expanding out a formal sum we will often drop terms where . Similarly, we sometimes drop the in an expression like , writing just instead.   "
},
{
  "id": "spec_group_rings",
  "level": "2",
  "url": "s_grouprings_polys.html#spec_group_rings",
  "type": "Specimen",
  "number": "23",
  "title": "Group rings.",
  "body": " Group rings   Let be a nontrivial commutative ring, and let be a finite group. We define to be the set of all formal sums , where for all , and we define binary operations and as follows: . The triple is a ring called the group ring of with coefficients in . The additive and multiplicative identities of are given as .   "
},
{
  "id": "rem_group_rings",
  "level": "2",
  "url": "s_grouprings_polys.html#rem_group_rings",
  "type": "Remark",
  "number": "2.22",
  "title": "Group rings.",
  "body": " Group rings     The subset is easily seen to be a subring of . Indeed, using the definition of the group ring operations, we see that . Thus we can think of the subring as a copy of living as a subset of . (Later we will be able to say that this subring is isomorphic to .) By slight abuse of notation, we will identify with this subring of , and sometimes drop the from the notation .    From the group ring operations definition, it follows that . Identifying with , we see that .    We can also think of the group as sitting inside , using the identification . We call such elements of  group elements . With this identification in place, we that the ring multiplication on extends the group operation of . That is, given , identifying these as the ring elements and and taking their product, we see that . As a result, it is easy to see that a group element is invertible with inverse the group element . It follows that we can think of as a subgroup of the group of units of (with respect to our identification): , .    Combining the previous observations, we can now give a decent motivation for the multiplication operation on . Namely, it is the unique binary operation on satisfying the following properties:   it distributes over the given addition operation on ;    it extends the group operation in the sense that ;    we have for all with respect to this multiplication.   In this sense our multiplication operation is the unique way of extending the group operation of to a ring operation on in such a way that our copy of lies in the center of .     "
},
{
  "id": "eg_group_ring_D3",
  "level": "2",
  "url": "s_grouprings_polys.html#eg_group_ring_D3",
  "type": "Example",
  "number": "2.23",
  "title": "Group ring of <span class=\"process-math\">\\(D_3\\)<\/span>.",
  "body": " Group ring of   Let , and consider the group ring .   Let and . Compute and .    Show that is a unit in        When computing an explicit product in a group ring, instead of using the formal definition in , it is usually easiest to expand out using distributivity, use the fact that the ring coefficients commute with everything and that the ring product of group elements is given by the group product, and the collect like terms.   We have . Observe that : no great surprise in light of .    First observe that is a unit in with inverse . (See .) Since , it suffices to show that is a unit of . (If and are units, then so is .) Playing around with some expressions, we find that . Thus is a unit. We conclude that is a unit, with inverse .      "
},
{
  "id": "rem_group_ring_field",
  "level": "2",
  "url": "s_grouprings_polys.html#rem_group_ring_field",
  "type": "Remark",
  "number": "2.24",
  "title": "Group rings over a field.",
  "body": " Group rings over a field  Let be a field, and let be a group of cardinality . In this case the group ring has the additional structure of a -vector space, where vector addition is just the ring addition, and scalar multiplication by an element is defined as ring multiplication by the element . In fact, identifying elements of as tuples via the correspondence , we see that as a vector space, is literally equal to the vector space of -tuples with coefficients in with its usual vector operations: . As you will see on your homework, this added vector space structure gives us additional tools for studying group rings over fields.  "
},
{
  "id": "eg_group_rings",
  "level": "2",
  "url": "s_grouprings_polys.html#eg_group_rings",
  "type": "Example",
  "number": "2.25",
  "title": "Group ring properties.",
  "body": " Group ring properties   Let be a nontrivial commutative ring, and let be a finite group.   Prove that is commutative if and only if is abelian.    Consider the element . Compute , where is an element of .    Let be a nontrivial element. Show that is a zero divisor.    When is a group ring a division ring?       Let be the distinct elements of . To distinguish between the group operation and ring multiplication, we will use concatenation for the group operation and for the ring operation.   Assume that is commutative. For all , we have . Thus is abelian.  Now assume is abelian. Given , expanding out using distributivity and commutativity of ring coefficients, we have . Thus is commutative.    We have , where the penultimate line follows since as runs through all elements of , so too does .  Observe that if is nontrivial, the taking , the equality implies that is noninvertible: if it were, we could cancel it to conclude , a contradiction.    We have . Since and are both nonzero elements of , we conclude that is a zero divisor (as is ).    Both (2) and (3) imply that is a division ring if and only if is trivial and is a field.      "
},
{
  "id": "spec_power_series",
  "level": "2",
  "url": "s_grouprings_polys.html#spec_power_series",
  "type": "Specimen",
  "number": "24",
  "title": "Power series ring.",
  "body": " Power series ring   Let be a nontrivial commutative ring. We define the set to be the set of all formal sums of the form , where for all , and we define binary operations and as follows: . The triple is a commutative ring called the power series ring over (or with coefficients in) in the unknown (or indeterminate) . The additive and multiplicative identities of are given as . Given a power series , we call its -th term , and its -th coefficient .  We will use function-like notation to name power series. In more detail, we will refer to power series using function letters like and , and will write when explicitly introducing names of coefficients.   "
},
{
  "id": "ss_poly_powerseries-4",
  "level": "2",
  "url": "s_grouprings_polys.html#ss_poly_powerseries-4",
  "type": "Remark",
  "number": "2.26",
  "title": "Power series equality.",
  "body": " Power series equality  When are two power series and equal? Identifying these formal sums as tuples , , following , we see that .  "
},
{
  "id": "spec_poly_ring",
  "level": "2",
  "url": "s_grouprings_polys.html#spec_poly_ring",
  "type": "Specimen",
  "number": "25",
  "title": "Polynomial rings.",
  "body": " Polynomial rings   Let be a nontrivial commutative ring. Define the polynomial ring over in the indeterminate to be the subset of all power series whose coefficients are eventually equal to zero: i.e., . It is easy to see that is a subring of , and thus a ring in its own right. Restricted to , the power series multiplication rule becomes the familiar polynomial multiplication rule: . As illustrated above, when denoting polynomials we will usually drop all the terms with zero coefficients: , , or .  Given a nonzero polynomial , we define its degree , , to be the largest satisfying . If , we define .  If is a polynomial of degree , we call the leading coefficient of . A polynomial with leading coefficient equal to is called monic .   "
},
{
  "id": "ss_poly_powerseries-7",
  "level": "2",
  "url": "s_grouprings_polys.html#ss_poly_powerseries-7",
  "type": "Remark",
  "number": "2.27",
  "title": "Polynomial and power series rings.",
  "body": " Polynomial and power series rings  When working with a power series ring , we will identify the ring with power series of the form . Since this identification preserves the ring operations of , we end up with a chain of subring inclusions .  "
},
{
  "id": "prop_deg_poly",
  "level": "2",
  "url": "s_grouprings_polys.html#prop_deg_poly",
  "type": "Proposition",
  "number": "2.28",
  "title": "Polynomial degree properties.",
  "body": " Polynomial degree properties   Let be a nontrivial commutative ring, and let and be nonzero polynomials in .    , with equality if is an integral domain.     .          Assume and , so that , where and . From the polynomial multiplication rule given in , we see that . It follows that . If is an integral domain, then and thus .    The proof is left to the reader.      "
},
{
  "id": "eg_poly_deg",
  "level": "2",
  "url": "s_grouprings_polys.html#eg_poly_deg",
  "type": "Example",
  "number": "2.29",
  "title": "Polynomial degree.",
  "body": " Polynomial degree   Find polynomials satisfying .    Let and . We have and .   "
},
{
  "id": "cor_poly_int_domain",
  "level": "2",
  "url": "s_grouprings_polys.html#cor_poly_int_domain",
  "type": "Corollary",
  "number": "2.30",
  "title": "Intregral polynomial rings.",
  "body": " Intregral polynomial rings   Let be a nontrivial commutative ring. The following statements are equivalent.    is an integral domain.     is an integral domain.     is an integral domain.       Since clearly a subring of an integral domain is an integral domain, we have (3) (2) (1). It remains only to show (1) (3).  Assume is an integral domain. Given nonzero elements , we can write , where . But then . Since is an integral domain, and since , we conclude that , as desired.   "
},
{
  "id": "eg_poly_power",
  "level": "2",
  "url": "s_grouprings_polys.html#eg_poly_power",
  "type": "Example",
  "number": "2.31",
  "title": "Units of polynomial and power series rings.",
  "body": " Units of polynomial and power series rings   Let be a nontrivial commutative ring.   Show that is a unit if and only if .    Prove: if is an integral domain, then .       Left as an exercise.   "
},
{
  "id": "s_quaternions",
  "level": "1",
  "url": "s_quaternions.html",
  "type": "Section",
  "number": "2.4",
  "title": "Hamilton quaternion rings",
  "body": " Hamilton quaternion rings   Quaternion rings   Let be a nontrivial commutative ring, and assume in . We define to be the set of all formal sums , where for all . We define addition on as . We define multiplication to be the unique binary operation that distributes over the addition operation , satisfies for all , and satisfies . The triple is a ring called the Hamilton quaternion ring over (or with coefficients in) .  In the special case where , we denote and call simply the Hamilton quaternions .     Quaternion conjugation and norm   Let be a nontrivial commutative ring. Given , its quaternion conjugate , denoted is defined as . The quaternion norm is the function defined as . A straightforward computation shows that if , then .     Quaternion conjugation and norm   Let be a nontrivial commutative ring.    for all and .     for all .     for all .    The following statements are equivalent.    .     .     .          This will be given as a homework exercise.     is a division ring   The Hamilton quaternions is a division ring.    For , we have . Thus , as desired.     Division rings over  We have met our first noncommutative division ring in the form of . More than just a ring, is what we call an -algebra , which we can understand as a ring containing a copy of lying in its center. Any -algebra is in particular a vector space over : we define vector addition as the ring addition, and we define scalar multiplication as the ring multiplication , where and .  Let's call a division ring that is also an -algebra a division algebra over . Besides , note that and are also division algebras over . Are there any others? The answer is no, if we further stipulate that the division algebra have finite dimension over . This is a famous result due to Frobenius: if is a finite-dimensional division algebra over , then is isomorphic to , , or ! (Of course, isomorphism is yet to be definied, but you can imagine what this will mean for rings.)    Finite division rings  While we are hunting for interesting examples of division rings, you might also wonder whether there are any interesting finite division rings. The answer here is similarly constrictive. A famous result due to Wedderburn states that every finite division ring is in fact a finite field! Thus there are no noncommutative finite division rings. Moreover, it is not very difficult to describe all finite fields, as you will see in Math 331-3.   "
},
{
  "id": "spec_quat_rings",
  "level": "2",
  "url": "s_quaternions.html#spec_quat_rings",
  "type": "Specimen",
  "number": "26",
  "title": "Quaternion rings.",
  "body": " Quaternion rings   Let be a nontrivial commutative ring, and assume in . We define to be the set of all formal sums , where for all . We define addition on as . We define multiplication to be the unique binary operation that distributes over the addition operation , satisfies for all , and satisfies . The triple is a ring called the Hamilton quaternion ring over (or with coefficients in) .  In the special case where , we denote and call simply the Hamilton quaternions .   "
},
{
  "id": "d_quat_norm",
  "level": "2",
  "url": "s_quaternions.html#d_quat_norm",
  "type": "Definition",
  "number": "2.32",
  "title": "Quaternion conjugation and norm.",
  "body": " Quaternion conjugation and norm   Let be a nontrivial commutative ring. Given , its quaternion conjugate , denoted is defined as . The quaternion norm is the function defined as . A straightforward computation shows that if , then .   "
},
{
  "id": "th_quat_norm",
  "level": "2",
  "url": "s_quaternions.html#th_quat_norm",
  "type": "Theorem",
  "number": "2.33",
  "title": "Quaternion conjugation and norm.",
  "body": " Quaternion conjugation and norm   Let be a nontrivial commutative ring.    for all and .     for all .     for all .    The following statements are equivalent.    .     .     .          This will be given as a homework exercise.   "
},
{
  "id": "cor_",
  "level": "2",
  "url": "s_quaternions.html#cor_",
  "type": "Corollary",
  "number": "2.34",
  "title": "<span class=\"process-math\">\\(\\HH\\)<\/span> is a division ring.",
  "body": " is a division ring   The Hamilton quaternions is a division ring.    For , we have . Thus , as desired.   "
},
{
  "id": "s_quaternions-6",
  "level": "2",
  "url": "s_quaternions.html#s_quaternions-6",
  "type": "Remark",
  "number": "2.35",
  "title": "Division rings over <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Division rings over  We have met our first noncommutative division ring in the form of . More than just a ring, is what we call an -algebra , which we can understand as a ring containing a copy of lying in its center. Any -algebra is in particular a vector space over : we define vector addition as the ring addition, and we define scalar multiplication as the ring multiplication , where and .  Let's call a division ring that is also an -algebra a division algebra over . Besides , note that and are also division algebras over . Are there any others? The answer is no, if we further stipulate that the division algebra have finite dimension over . This is a famous result due to Frobenius: if is a finite-dimensional division algebra over , then is isomorphic to , , or ! (Of course, isomorphism is yet to be definied, but you can imagine what this will mean for rings.)  "
},
{
  "id": "s_quaternions-7",
  "level": "2",
  "url": "s_quaternions.html#s_quaternions-7",
  "type": "Remark",
  "number": "2.36",
  "title": "Finite division rings.",
  "body": " Finite division rings  While we are hunting for interesting examples of division rings, you might also wonder whether there are any interesting finite division rings. The answer here is similarly constrictive. A famous result due to Wedderburn states that every finite division ring is in fact a finite field! Thus there are no noncommutative finite division rings. Moreover, it is not very difficult to describe all finite fields, as you will see in Math 331-3.  "
},
{
  "id": "s_ring_homo",
  "level": "1",
  "url": "s_ring_homo.html",
  "type": "Section",
  "number": "2.5",
  "title": "Ring homomorphisms and ideals",
  "body": " Ring homomorphisms and ideals   Ring homomorphisms   Ring homomorphism   Let and be rings. A ring homomorphism is a function satisfying the following properties.    ( , is a group homomorphism from to ).     for all .     .   Given a ring homomorphism , its kernel  is defined as . An isomorphism is a bijective ring homomorphism.  Given rings and , we will write for the set of all ring homomorphisms from to : , .     Ring homomorphism  The Dummit and Foote text does not include axiom (iii), since rings there are not assumed to be unital. Additionally, (iii) does not follow logically form (i) and (ii): , the zero map between any two rings satisfies (i) and (ii), but not (iii) necessarily.    Ring homomorphisms      Subring inclusions are ring homomorphisms.    The composition of ring homomorphisms is a ring homomorphism.    Given a bijective ring homomorphism , its inverse is a ring homomorphism.    If is a ring homomorphism, then is a subring of .    A ring homomorphism is injective if and only if .       Left to the reader.     Group structure of rings  The last statement of follows immediately from the fact that a ring homomorphism is in particular a group homomorphism with respect to the additive structures of and . This is one of many examples where we will exploit the group structure of rings to obtain useful results (or steps toward a result) in the context of rings.      Prove that     Assume by contradiction that is a ring homomorphism. Since in particular is a group homomorphism, is an element of of order dividing . (See .) But is the only such element. Thus : a contradiction, since in .     Ring homomorphisms from   Let be a ring. There is a unique ring homomorphism , defined as for all . In particular, is a singleton.     Polynomial ring homomorphisms   Let and be commutative rings. A ring homomorphism is uniquely determined by its restriction to the subring and the value . Conversely, given a ring homomorphism and an element , there is a unique ring homomorphism such that and . Thus we have the following bijection:   Description of polynomial ring homomorphisms    Given a ring homomorphism corresponding to the pair , if the map is clear from the context, we will often call the evaluation at homomorphism.  Similarly, if and are nontrivial commutative rings, and if is a ring homomorphism, identifying with the map obtained by composing with the subring inclusion , we will often use (or its name) to refer to the corresponding ring homomorphism .       Let be a commutative ring. Show that there is a bijection between and .    From we know there is a bijection between and . From , on the other hand, we know that , where for all . The result follows since is in bijective correspondence with . More explicitly, all homomorphisms are of the form , for some . Note that the integers appearing on the right must be interpreted as the ring elements .     Augmentation map   Let be a nontrivial commutative ring, and let be a finite group The map defined as is a surjective ring homomorphism called the augmentation map . Its kernel is called the augmentation ideal .     Augmentation map   Let be a nontrivial commutative ring, and let be a finite group. Prove that the augmentation map is a surjective ring homomorphism.    It is easy to see that is group homomorphism, , and moreover that it is surjective (since for any ). It remains only to show that it is multiplicative. Given elements , of , we have , where . Thus , as desired.      Ideals   Ideal   An ideal of a ring is a subset satisfying the following properties.    is a subgroup of .     is closed under left multiplication : , if , then for all .     is closed under right multiplication : , if , then for all .   A subset of is a left ideal if it satisfies (i) and (ii); it is a right ideal if it satisfies (i) and (iii).     Trivial ideals   Given a ring , the sets and are easily seen to be ideals of . We will call these trivial ideals . Additionally we will call an ideal  nonzero if , and proper if .         Ideals   Let be a ring.   If is an indexed family of ideals of , then is an ideal.    If and are ideals of , then so is .    The set defined as the set of all finite sums of products , where and , is an ideal of .  For a positive integer , we define to be the -fold ideal product of with itself.    If is a ring homomorphism, then is an ideal of .       We leave all but (3) to the reader. For (3), it is clear that as defined is a subgroup of . Given any , and element , with and for all , we have , where , showing that , as desired.     Generated ideals    the ideal generated by    Let be a subset of a ring . The ideal generated by , denoted , is the intersection of all ideals of containing : , . If , we wite for ; similarly, if , we write .  An ideal is finitely generated if we have for some elements ; it is principal if for some .     Generated ideals   Let be a subset of the ring .    is the smallest ideal of containing in the following sense: if is an ideal of containing , then .     is the set of all finite sums of elements of the form , where and : , letting , we have .        Generated ideals and kernels   Let be a ring homomorphism. For any set , we have if and only if for all .    Since is an ideal of , we have .     Ideals of   Give an explicit description of the set of all ideals of .    Let be an ideal of . Since in particular is a subgroup of , we know that can be written uniquely as for some nonnegative integer . It is easy to see, using , that , the principal ideal generated by . We conclude that the correspondence gives a bijective correspondence between nonnegative integers of and ideals of . In particular, all ideals of are principal.    Recall that for any ring , there is a unique ring homomorphism : namely, for all . We can define the characteristic of a ring using this homomorphism.   Characteristic of a ring    characteristic of the ring    Let be a nonzero ring. The characteristic of , denoted , is defined as the nonnegative integer such that , where is the unique ring homomorphism from to . Equivalently, is either the smallest positive integeger satisfying , or 0 if no such integer exists.     Characteristic : first-year's dream   Let be a commutative ring with for some prime integer . For all positive integers and elements , we have .    Left as an exercise.     Ideals of division rings   Let be a division ring. Prove that the only ideals of are and itself.    Let be an ideal of that is not the zero ideal, and let be any nonzero element. Since is a division ring, there is an element satisfying . It follows that for any , we have , and thus that .     Ideals of   Let be commutative ring. Prove that all ideals of are of the form for some ideal , where we define . In particular, given a field , the only ideals of are and itself.    Left as homework exercise.     Simple ring   A nonzero ring is simple if its only ideals are and .    From the previous examples, we see that fields, division rings more generally, and also matrix rings over fields are all examples of simple rings. One useful property of simple rings is that any nontrivial homomorphism out of a simple ring is injective.   Homomorphisms from simple rings   Let be a simple ring. If is a ring homomorphism with a nonzero ring, then is injective.    Since is nonzero, the ideal is not equal to . It follows that , and hence that is injective (by group homomorphism properties).    We end this section with an official definition of a ring algebra.   -algebra   Let be a commutative ring. An -algebra (or algebra over ) is a nonzero ring together with a ring homomorphism such that is contained in the center of ( , elements of the subring commute with all elements of ). We write to denote that is an -algebra.    It is easy to see that our constructions , , , and are all examples of -algebras. Furthermore, in these examples, the corresponding ring homomorphism defining the -algebra structure is injective, allowing us to identify as a subring of the given -algebra. This of course is not always the case, simply because a ring homomorphism need not be injective. However, it is always the case with algebras where is a field. This is because nontrivial ring homomorphisms are injective by    "
},
{
  "id": "d_ring_homo",
  "level": "2",
  "url": "s_ring_homo.html#d_ring_homo",
  "type": "Definition",
  "number": "2.37",
  "title": "Ring homomorphism.",
  "body": " Ring homomorphism   Let and be rings. A ring homomorphism is a function satisfying the following properties.    ( , is a group homomorphism from to ).     for all .     .   Given a ring homomorphism , its kernel  is defined as . An isomorphism is a bijective ring homomorphism.  Given rings and , we will write for the set of all ring homomorphisms from to : , .   "
},
{
  "id": "ss_rings-3",
  "level": "2",
  "url": "s_ring_homo.html#ss_rings-3",
  "type": "Warning",
  "number": "2.38",
  "title": "Ring homomorphism.",
  "body": " Ring homomorphism  The Dummit and Foote text does not include axiom (iii), since rings there are not assumed to be unital. Additionally, (iii) does not follow logically form (i) and (ii): , the zero map between any two rings satisfies (i) and (ii), but not (iii) necessarily.  "
},
{
  "id": "prop_ring_homos",
  "level": "2",
  "url": "s_ring_homo.html#prop_ring_homos",
  "type": "Proposition",
  "number": "2.39",
  "title": "Ring homomorphisms.",
  "body": " Ring homomorphisms      Subring inclusions are ring homomorphisms.    The composition of ring homomorphisms is a ring homomorphism.    Given a bijective ring homomorphism , its inverse is a ring homomorphism.    If is a ring homomorphism, then is a subring of .    A ring homomorphism is injective if and only if .       Left to the reader.   "
},
{
  "id": "ss_rings-5",
  "level": "2",
  "url": "s_ring_homo.html#ss_rings-5",
  "type": "Remark",
  "number": "2.40",
  "title": "Group structure of rings.",
  "body": " Group structure of rings  The last statement of follows immediately from the fact that a ring homomorphism is in particular a group homomorphism with respect to the additive structures of and . This is one of many examples where we will exploit the group structure of rings to obtain useful results (or steps toward a result) in the context of rings.  "
},
{
  "id": "eg_empty_ring_homo_set",
  "level": "2",
  "url": "s_ring_homo.html#eg_empty_ring_homo_set",
  "type": "Example",
  "number": "2.41",
  "title": "<span class=\"process-math\">\\(\\Hom(\\Z\/3\\Z, \\Z\/2\\Z)\\)<\/span>.",
  "body": "   Prove that     Assume by contradiction that is a ring homomorphism. Since in particular is a group homomorphism, is an element of of order dividing . (See .) But is the only such element. Thus : a contradiction, since in .   "
},
{
  "id": "spec_hom_Z",
  "level": "2",
  "url": "s_ring_homo.html#spec_hom_Z",
  "type": "Specimen",
  "number": "27",
  "title": "Ring homomorphisms from <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Ring homomorphisms from   Let be a ring. There is a unique ring homomorphism , defined as for all . In particular, is a singleton.   "
},
{
  "id": "spec_poly_ring_homo",
  "level": "2",
  "url": "s_ring_homo.html#spec_poly_ring_homo",
  "type": "Specimen",
  "number": "28",
  "title": "Polynomial ring homomorphisms.",
  "body": " Polynomial ring homomorphisms   Let and be commutative rings. A ring homomorphism is uniquely determined by its restriction to the subring and the value . Conversely, given a ring homomorphism and an element , there is a unique ring homomorphism such that and . Thus we have the following bijection:   Description of polynomial ring homomorphisms    Given a ring homomorphism corresponding to the pair , if the map is clear from the context, we will often call the evaluation at homomorphism.  Similarly, if and are nontrivial commutative rings, and if is a ring homomorphism, identifying with the map obtained by composing with the subring inclusion , we will often use (or its name) to refer to the corresponding ring homomorphism .   "
},
{
  "id": "eg_poly_homo",
  "level": "2",
  "url": "s_ring_homo.html#eg_poly_homo",
  "type": "Example",
  "number": "2.42",
  "title": "<span class=\"process-math\">\\(\\Hom(\\Z[x],R)\\)<\/span>.",
  "body": "   Let be a commutative ring. Show that there is a bijection between and .    From we know there is a bijection between and . From , on the other hand, we know that , where for all . The result follows since is in bijective correspondence with . More explicitly, all homomorphisms are of the form , for some . Note that the integers appearing on the right must be interpreted as the ring elements .   "
},
{
  "id": "spec_augementation_map",
  "level": "2",
  "url": "s_ring_homo.html#spec_augementation_map",
  "type": "Specimen",
  "number": "29",
  "title": "Augmentation map.",
  "body": " Augmentation map   Let be a nontrivial commutative ring, and let be a finite group The map defined as is a surjective ring homomorphism called the augmentation map . Its kernel is called the augmentation ideal .   "
},
{
  "id": "eg_augmentation_map",
  "level": "2",
  "url": "s_ring_homo.html#eg_augmentation_map",
  "type": "Example",
  "number": "2.43",
  "title": "Augmentation map.",
  "body": " Augmentation map   Let be a nontrivial commutative ring, and let be a finite group. Prove that the augmentation map is a surjective ring homomorphism.    It is easy to see that is group homomorphism, , and moreover that it is surjective (since for any ). It remains only to show that it is multiplicative. Given elements , of , we have , where . Thus , as desired.   "
},
{
  "id": "d_ideal",
  "level": "2",
  "url": "s_ring_homo.html#d_ideal",
  "type": "Definition",
  "number": "2.44",
  "title": "Ideal.",
  "body": " Ideal   An ideal of a ring is a subset satisfying the following properties.    is a subgroup of .     is closed under left multiplication : , if , then for all .     is closed under right multiplication : , if , then for all .   A subset of is a left ideal if it satisfies (i) and (ii); it is a right ideal if it satisfies (i) and (iii).   "
},
{
  "id": "eg_trivial_ideals",
  "level": "2",
  "url": "s_ring_homo.html#eg_trivial_ideals",
  "type": "Example",
  "number": "2.45",
  "title": "Trivial ideals.",
  "body": " Trivial ideals   Given a ring , the sets and are easily seen to be ideals of . We will call these trivial ideals . Additionally we will call an ideal  nonzero if , and proper if .       "
},
{
  "id": "prop_ideals",
  "level": "2",
  "url": "s_ring_homo.html#prop_ideals",
  "type": "Proposition",
  "number": "2.46",
  "title": "Ideals.",
  "body": " Ideals   Let be a ring.   If is an indexed family of ideals of , then is an ideal.    If and are ideals of , then so is .    The set defined as the set of all finite sums of products , where and , is an ideal of .  For a positive integer , we define to be the -fold ideal product of with itself.    If is a ring homomorphism, then is an ideal of .       We leave all but (3) to the reader. For (3), it is clear that as defined is a subgroup of . Given any , and element , with and for all , we have , where , showing that , as desired.   "
},
{
  "id": "d_gen_ideal",
  "level": "2",
  "url": "s_ring_homo.html#d_gen_ideal",
  "type": "Definition",
  "number": "2.47",
  "title": "Generated ideals.",
  "body": " Generated ideals    the ideal generated by    Let be a subset of a ring . The ideal generated by , denoted , is the intersection of all ideals of containing : , . If , we wite for ; similarly, if , we write .  An ideal is finitely generated if we have for some elements ; it is principal if for some .   "
},
{
  "id": "prop_generated_ideals",
  "level": "2",
  "url": "s_ring_homo.html#prop_generated_ideals",
  "type": "Proposition",
  "number": "2.48",
  "title": "Generated ideals.",
  "body": " Generated ideals   Let be a subset of the ring .    is the smallest ideal of containing in the following sense: if is an ideal of containing , then .     is the set of all finite sums of elements of the form , where and : , letting , we have .      "
},
{
  "id": "cor_gen_ideal_kernel",
  "level": "2",
  "url": "s_ring_homo.html#cor_gen_ideal_kernel",
  "type": "Corollary",
  "number": "2.49",
  "title": "Generated ideals and kernels.",
  "body": " Generated ideals and kernels   Let be a ring homomorphism. For any set , we have if and only if for all .    Since is an ideal of , we have .   "
},
{
  "id": "eg_ideals_integers",
  "level": "2",
  "url": "s_ring_homo.html#eg_ideals_integers",
  "type": "Example",
  "number": "2.50",
  "title": "Ideals of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Ideals of   Give an explicit description of the set of all ideals of .    Let be an ideal of . Since in particular is a subgroup of , we know that can be written uniquely as for some nonnegative integer . It is easy to see, using , that , the principal ideal generated by . We conclude that the correspondence gives a bijective correspondence between nonnegative integers of and ideals of . In particular, all ideals of are principal.   "
},
{
  "id": "ss_ideals-9",
  "level": "2",
  "url": "s_ring_homo.html#ss_ideals-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic "
},
{
  "id": "d_characteristic_ring",
  "level": "2",
  "url": "s_ring_homo.html#d_characteristic_ring",
  "type": "Definition",
  "number": "2.51",
  "title": "Characteristic of a ring.",
  "body": " Characteristic of a ring    characteristic of the ring    Let be a nonzero ring. The characteristic of , denoted , is defined as the nonnegative integer such that , where is the unique ring homomorphism from to . Equivalently, is either the smallest positive integeger satisfying , or 0 if no such integer exists.   "
},
{
  "id": "prop_first_years_dream",
  "level": "2",
  "url": "s_ring_homo.html#prop_first_years_dream",
  "type": "Proposition",
  "number": "2.52",
  "title": "Characteristic <span class=\"process-math\">\\(p\\text{:}\\)<\/span> first-year’s dream.",
  "body": " Characteristic : first-year's dream   Let be a commutative ring with for some prime integer . For all positive integers and elements , we have .    Left as an exercise.   "
},
{
  "id": "eg_ideals_division_rings",
  "level": "2",
  "url": "s_ring_homo.html#eg_ideals_division_rings",
  "type": "Example",
  "number": "2.53",
  "title": "Ideals of division rings.",
  "body": " Ideals of division rings   Let be a division ring. Prove that the only ideals of are and itself.    Let be an ideal of that is not the zero ideal, and let be any nonzero element. Since is a division ring, there is an element satisfying . It follows that for any , we have , and thus that .   "
},
{
  "id": "eg_ideals_matrix_rings",
  "level": "2",
  "url": "s_ring_homo.html#eg_ideals_matrix_rings",
  "type": "Example",
  "number": "2.54",
  "title": "Ideals of <span class=\"process-math\">\\(M_n(R)\\)<\/span>.",
  "body": " Ideals of   Let be commutative ring. Prove that all ideals of are of the form for some ideal , where we define . In particular, given a field , the only ideals of are and itself.    Left as homework exercise.   "
},
{
  "id": "d_simple",
  "level": "2",
  "url": "s_ring_homo.html#d_simple",
  "type": "Definition",
  "number": "2.55",
  "title": "Simple ring.",
  "body": " Simple ring   A nonzero ring is simple if its only ideals are and .   "
},
{
  "id": "prop_simple_ring_homo",
  "level": "2",
  "url": "s_ring_homo.html#prop_simple_ring_homo",
  "type": "Proposition",
  "number": "2.56",
  "title": "Homomorphisms from simple rings.",
  "body": " Homomorphisms from simple rings   Let be a simple ring. If is a ring homomorphism with a nonzero ring, then is injective.    Since is nonzero, the ideal is not equal to . It follows that , and hence that is injective (by group homomorphism properties).   "
},
{
  "id": "d_algebra",
  "level": "2",
  "url": "s_ring_homo.html#d_algebra",
  "type": "Definition",
  "number": "2.57",
  "title": "<span class=\"process-math\">\\(R\\)<\/span>-algebra.",
  "body": " -algebra   Let be a commutative ring. An -algebra (or algebra over ) is a nonzero ring together with a ring homomorphism such that is contained in the center of ( , elements of the subring commute with all elements of ). We write to denote that is an -algebra.   "
},
{
  "id": "s_quot_ring",
  "level": "1",
  "url": "s_quot_ring.html",
  "type": "Section",
  "number": "2.6",
  "title": "Quotient rings and isomorphism theorems",
  "body": " Quotient rings and isomorphism theorems  The definition of a quotient ring is a straightforward generalization of the ring structure we defined for modular rings in . Since an ideal of a ring is in particular a subgroup of , and a normal one at that (since is abelian), we can form the coset space , which comes equipped with a well-defined addition operation . Not surprisingly there is also a well-defined multiplication that can be defined on : . Let's see why this is well defined: . As usual, once we know the two operations and are well defined on , the fact that they satisfy the ring axioms follows almost immediately from their being defined in terms of the operations of .   Quotient ring   Let be an ideal of the ring . We define binary operations and on as follows: . The triple is a ring, called the quotient ring of by . Its additive identity is , and its multiplciative identity is .     Modular rings   Let be a positive integer. Show that the ring is equal to the quotient ring , where .    We have seen previously that as a group, is equal to the quotient group . Moreover, it is clear that the coset multiplication operation is identical to the modular multiplication operation defined in . Thus the two rings are identical.    The connection between ring quotients and group quotients is strong. Indeed, by definition a ring quotient is equal to the group quotient , thinking of as a subgroup of , together with an extra layer of strucutre coming from the coset multiplication. It is not all that surprising, then, that ring quotients enjoy many of the same properties as group quotients, starting with a universal mapping property.   Quotient map: universal property   Let be an ideal of the ring , and let be the corresponding quotient map. Given any ring homomorphism satisfying , there exists a unique ring homomorphism satisfying . Moreover, is defined as . for all .  In short, there is a unique homomorphism making the diagram below commutative.   Universal property of quotient map   Universal property of quotient map       We get most of this result for free from . The only thing we need to be careful about is that all maps in question satisfy the additional ring homomorphism axioms (ii) and (iii) from , and this is straightforward.    The following corollary is simply a compact restatement of using the language of and can be handy for computing the set of homomorphisms between rings.   Quotient ring homomorphisms   Let be an ideal of the ring , and let be the quotient map. Given any ring , the map is an injection onto the set of all satisfying . In other words, we can identify with the set .     Quotient ring homomorphisms   Let be a positive integer, and let be a ring. Prove that is either empty or a singleton.        Of course, we also get an analogue of the isomorphism theorems for rings. We state them here without proof, and in somewhat terse fashion. Notice that some things are simplified by the fact that the normality issue does not arise (since is an abelian group).   Isomorphism theorems for rings   Let be a ring.   First isomorphism theorem  Given a ring homomorphism with kernel , we have via the isomorphism .    Second isomorphism theorem  Given a subring and ideal , is a subring of , is an ideal of , and .    Third isomorphism theorem  Let be a surjective ring homomorphism. If is an ideal of containing , then is an ideal of , and we have . In particular, considering the quotient map , we see that if is a chain of ideals in , then is an ideal of , and we have     Fourth isomorphism theorem  Let be a surjective ring homomorphism. The map is a bijection between the set of ideals of that contain and the set of ideals of , with inverse given by . Moreover, this bijection preserves just about all ideal operations and relations: , inclusion, intersection, sum, product, .            First isomorphism theorem   Identify the quotient up to isomorphism with a familiar ring using the first isomorphism theorem.    We claim that . Define as : , is the evaluation at map, thinking of as a subring of . This a ring homomorphism according to , and is easily seen to be surjective, since for any . We claim that . Indeed, we see that . Thus . It follows from that . Conversely, suppose , and thus . Applying polynomial division (with remainder), we can write , where , and thus for some . Applying , we conclude that . But in , we have , , if and only if . Thus , and we see that . Thus , and we conclude that , by the first isomorphism theorem.     Ideals of   Let be a positive integer. Use the fourth isomorphism to describe the ideals of .    We have , where . Let be the quotient map. We have . By the fourth isomorphism theorem, the ideals of are in bijective correspondence with the ideals of that contain . A previous result tells us that these are precisely ideals of the form , where and . Since the bijection is given by , we see that the ideals of are preciseley those of the form , where and . In particular, all ideals of are principal, and there are finitely many of them.     Quotients of   Let be a positive integer. Determine, up to isomorphism, all the quotients of by an ideal. Your answers should be expressed as familiar rings.    Let , so that . From the previous example, the ideals of are precisely those of the form , where and . Furthermore we have for any such , , where . We conclude from the third isomorphism theorem that . Thus, up to isomorphism, the quotients of are precisely the rings , where and .    "
},
{
  "id": "spec_quot_ring",
  "level": "2",
  "url": "s_quot_ring.html#spec_quot_ring",
  "type": "Specimen",
  "number": "30",
  "title": "Quotient ring.",
  "body": " Quotient ring   Let be an ideal of the ring . We define binary operations and on as follows: . The triple is a ring, called the quotient ring of by . Its additive identity is , and its multiplciative identity is .   "
},
{
  "id": "eg_modular_rings",
  "level": "2",
  "url": "s_quot_ring.html#eg_modular_rings",
  "type": "Example",
  "number": "2.58",
  "title": "Modular rings.",
  "body": " Modular rings   Let be a positive integer. Show that the ring is equal to the quotient ring , where .    We have seen previously that as a group, is equal to the quotient group . Moreover, it is clear that the coset multiplication operation is identical to the modular multiplication operation defined in . Thus the two rings are identical.   "
},
{
  "id": "th_ring_quot_map",
  "level": "2",
  "url": "s_quot_ring.html#th_ring_quot_map",
  "type": "Theorem",
  "number": "2.59",
  "title": "Quotient map: universal property.",
  "body": " Quotient map: universal property   Let be an ideal of the ring , and let be the corresponding quotient map. Given any ring homomorphism satisfying , there exists a unique ring homomorphism satisfying . Moreover, is defined as . for all .  In short, there is a unique homomorphism making the diagram below commutative.   Universal property of quotient map   Universal property of quotient map       We get most of this result for free from . The only thing we need to be careful about is that all maps in question satisfy the additional ring homomorphism axioms (ii) and (iii) from , and this is straightforward.   "
},
{
  "id": "cor_quot_ring_map",
  "level": "2",
  "url": "s_quot_ring.html#cor_quot_ring_map",
  "type": "Corollary",
  "number": "2.61",
  "title": "Quotient ring homomorphisms.",
  "body": " Quotient ring homomorphisms   Let be an ideal of the ring , and let be the quotient map. Given any ring , the map is an injection onto the set of all satisfying . In other words, we can identify with the set .   "
},
{
  "id": "eg_ring_quot_homs",
  "level": "2",
  "url": "s_quot_ring.html#eg_ring_quot_homs",
  "type": "Example",
  "number": "2.62",
  "title": "Quotient ring homomorphisms.",
  "body": " Quotient ring homomorphisms   Let be a positive integer, and let be a ring. Prove that is either empty or a singleton.       "
},
{
  "id": "th_ring_isom_theorems",
  "level": "2",
  "url": "s_quot_ring.html#th_ring_isom_theorems",
  "type": "Theorem",
  "number": "2.63",
  "title": "Isomorphism theorems for rings.",
  "body": " Isomorphism theorems for rings   Let be a ring.   First isomorphism theorem  Given a ring homomorphism with kernel , we have via the isomorphism .    Second isomorphism theorem  Given a subring and ideal , is a subring of , is an ideal of , and .    Third isomorphism theorem  Let be a surjective ring homomorphism. If is an ideal of containing , then is an ideal of , and we have . In particular, considering the quotient map , we see that if is a chain of ideals in , then is an ideal of , and we have     Fourth isomorphism theorem  Let be a surjective ring homomorphism. The map is a bijection between the set of ideals of that contain and the set of ideals of , with inverse given by . Moreover, this bijection preserves just about all ideal operations and relations: , inclusion, intersection, sum, product, .          "
},
{
  "id": "eg_first_isom_complex",
  "level": "2",
  "url": "s_quot_ring.html#eg_first_isom_complex",
  "type": "Example",
  "number": "2.64",
  "title": "First isomorphism theorem.",
  "body": " First isomorphism theorem   Identify the quotient up to isomorphism with a familiar ring using the first isomorphism theorem.    We claim that . Define as : , is the evaluation at map, thinking of as a subring of . This a ring homomorphism according to , and is easily seen to be surjective, since for any . We claim that . Indeed, we see that . Thus . It follows from that . Conversely, suppose , and thus . Applying polynomial division (with remainder), we can write , where , and thus for some . Applying , we conclude that . But in , we have , , if and only if . Thus , and we see that . Thus , and we conclude that , by the first isomorphism theorem.   "
},
{
  "id": "eg_ideals_modularring",
  "level": "2",
  "url": "s_quot_ring.html#eg_ideals_modularring",
  "type": "Example",
  "number": "2.65",
  "title": "Ideals of <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Ideals of   Let be a positive integer. Use the fourth isomorphism to describe the ideals of .    We have , where . Let be the quotient map. We have . By the fourth isomorphism theorem, the ideals of are in bijective correspondence with the ideals of that contain . A previous result tells us that these are precisely ideals of the form , where and . Since the bijection is given by , we see that the ideals of are preciseley those of the form , where and . In particular, all ideals of are principal, and there are finitely many of them.   "
},
{
  "id": "eg_images_modular_ring",
  "level": "2",
  "url": "s_quot_ring.html#eg_images_modular_ring",
  "type": "Example",
  "number": "2.66",
  "title": "Quotients of <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Quotients of   Let be a positive integer. Determine, up to isomorphism, all the quotients of by an ideal. Your answers should be expressed as familiar rings.    Let , so that . From the previous example, the ideals of are precisely those of the form , where and . Furthermore we have for any such , , where . We conclude from the third isomorphism theorem that . Thus, up to isomorphism, the quotients of are precisely the rings , where and .   "
},
{
  "id": "s_prime_maximal",
  "level": "1",
  "url": "s_prime_maximal.html",
  "type": "Section",
  "number": "2.7",
  "title": "Prime and maximal ideals",
  "body": " Prime and maximal ideals   Prime and maximal ideals   Maximal ideal   Let be a ring. An ideal of is maximal if and if for some ideal , then either or . Using logical shorthand: an ideal is maximal if and . Equivalently, is a maximal element of the set of all proper ideals of with respect to the partial order .     Division ring   Let be a division ring. Prove that is the only maximal ideal of .    Indeed, is the only proper ideal of , since if an contains a nonzero element , then since is a unit it follows easily that . Thus is maximal.     Maximal ideals of   Let be a field, and let be a positive integer. Prove that is a maximal ideal of .    You have shown on your homework that the only ideals of are of the form where is an ideal of . Since the only ideals of are and , it follows that is the only proper ideal of , and hence maximal.     Maximal ideals of   Let be a nonnegative integer. Prove that the ideal is maximal if and only if is prime.    We have .    At the end of this section we will prove that maximal ideals exist in any ring using Zorn's lemma. Before getting to that, however, we first introduce prime ideals and relate these to maximal ideals. The theory of prime ideals can be developed for any ring, commutative or not, but for simplicity, we will restrict our attention to commutative rings.   Prime ideal   Let be a commutative ring. An ideal of is prime if and the following condition holds: for all , if , then or . Using logical shorthand: is prime if and .    The next theorem will help us identify prime and maximal ideals, and places both types of ideals in a common framework. Note that we include a useful criterion for maximal ideals that holds for all rings, commutative or not, in the form of statement (1). We take pains to emphasize that the remaining statements include the condition that the ring is commutative.   Prime and maximal ideals   Let be a ring.   An ideal of is maximal if and only if is simple.    Assume is commutative. An ideal of is prime if and only if is an integral domain.    Assume is commutative. An ideal of is maximal if and only if is a field.    Assume is commutative. All maximal ideals of are prime ideals.          By the fourth isomorphism theorem, the ideals of are in bijective correspondence with the ideals of containing . The result now follows immediately from the definitions of maximal ideal and simple ring.    We have integral if and only if implies or for all if and only if implies or for all , if and only if implies or for all , if and only if is prime.    From (1), is maximal if and only if is simple. It is easy to see that for commutative rings, simple is equivalent to being a field.    Since all fields are integral domains, and now imply that all maximal ideals are prime.        Prime and maximal ideals of   Let be a positive integer. Show that the following statements are equivalent.    is prime.     is maximal.     is a prime integer.       We have seen previously that for positive , the ring is an integral domain if and only if it is a field, if and only if is a prime integer. The result now follows from .     Prime integers  From the equivalence of (1) and (3) in , it follows that a positive integer is a prime integer if and only if is a prime ideal, if and only if implies or for all integers . We have thus derived, in a roundabout way, an equivalent formulation of being prime. (Recall that our original definition of a prime integer is one that has exactly two positive divisors: 1 and itself.) We will study the notion of a prime elements in arbitrary commutative rings down the line, and will in fact adopt this alternate formulation as our definition.     Zorn's lemma  We begin this section fumbling around in the foundations of set theory. The immediate motivation for our foray into the murky depths of mathematics is our needing Zorn's lemma to prove the existence of maximal ideals in rings. Beyond that, however, partially ordered sets are ubiquitous in mathematics and well worth a formal introduction.   Partial order   A partial order on a nonempty set is a binary relation satisfying the following properties.   Reflexivity   for all     Antisymmetry  If and , then .    Transitivity  If and , then .   A partially ordered set (or POSET ) is a pair where is a partial order on .  Let be a POSET. A subset is totally ordered (or a chain ) with respect to if for all , either or . An upper bound of is an element such that for all . An element is a maximal element of if implies for all ; similarly, is a minimal element of if implies for all .     Zorn's lemma   If is a nonempty POSET for which every totally ordered subset has an upper bound, then has a maximal element.    Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most set theory textbooks.     Totally ordered versus chain  We prefer the term totally ordered to chain , as the latter connotes a countable set. This is important, as to verify the conditions of Zorn's lemma, we must consider all totally ordered subsets, countable or not. It is not enough to just look at countable totally ordered subsets .   Let's see how we can use Zorn's lemma to prove the existence of maximal ideals. The underlying POSET we will use is a certain set of ideals of a ring, along the the partial order given by set inclusion.   Maximal ideals exist   Let be a ring, and let be a proper ideal of ( , ). There exists a maximal ideal of containing . In particular, if is nonzero, then contains a maximal ideal.    First observe that the second statement follows from the first by taking the ideal : a maximal ideal containing is the same thing as a maximal ideal.  Now let be a proper ideal of , and let be the set of all proper ideals of containing : . Note that is nonempty since . The binary relation given by set inclusion gives the structure of a POSET. We use Zorn's lemma to show that has a maximal element with respect to .  Consider any subset that is totally ordered with respect to . We must show that has an upper bound in . To this end we let . It is clear that for all , so it remains to show that : that is, we must show that (i) is an ideal containing , and (ii) .  Since for all , and since is the union of all such ideals, we have . To show is an ideal, we must show that it is a subgroup of and is closed under left and right multiplication by elements of . Since , we have . Now take . By definition we have and for some ideals . Since is totally ordered, we have either or . Assuming without loss of generality that the first condition holds, we may assume that . Since is an ideal it follows that , and thus that . This shows that is an ideal.  Next we show that . This is a consequence of the fact that in any ring for an ideal if and only if . Since for all , it follows that for all , and hence that . Thus .  Having verified the conditions of Zorn's lemma for all nonempty well-ordered subsets of , we conclude that has a maximal element . By definition and . We conclude our proof by showing that is maximal. Suppose for some proper ideal : then by definition, and hence by maximality. Thus is a maximal ideal of .     Zorn's lemma and maximal ideals  You might wonder whether there is a proof of the existence of maximal ideals that does not rely on Zorn's lemma. Surprisingly, we can say with assurance that the answer is no! As it turns out, not only does Zorn's lemma imply the existence of maximal ideals, but the converse is also true: the existence of maximal ideals in arbitrary rings implies Zorn's lemma. As a result, the following statements are all equivalent.   Zorn's lemma.    Any nonzero ring has a maximal ideal.    The axiom of choice: if is a family of nonempty sets indexed by the nonempty set , then is nonempty. (In other words, there is a way to choose for each , an element of in order to form a tuple .)   In fact, we can add a few more equivalent statements to the list. The three statements above can be shown to be equivalent to the following statements.   Every vector space has a basis.    Arbitrary products of compact topological spaces are compact. (Tychonoff's theorem).    Every set admits a total order satisfying the well-ordering principle: , every nonempty subset of has a minimal element with respect to . (Well-ordering theorem.)   It is quite a wonder that these six statements, which on the surface seem to say very different things, are in fact all equivalent. Moreover, on a psychological level there is a great range of plausibility among the various statements: whereas the axiom of choice seems intuitively obvious, the well-ordering principle is quite a shocker, since it would imply that even admits some mysterious well-ordering. This is the basis of the following bon mot attributed to Jerry Bona, professor emeritus at UIC: The axiom of choice is obviously true, the well-ordering theorem obviously false, and who can tell about Zorn's lemma?     "
},
{
  "id": "d_maximal_ideal",
  "level": "2",
  "url": "s_prime_maximal.html#d_maximal_ideal",
  "type": "Definition",
  "number": "2.67",
  "title": "Maximal ideal.",
  "body": " Maximal ideal   Let be a ring. An ideal of is maximal if and if for some ideal , then either or . Using logical shorthand: an ideal is maximal if and . Equivalently, is a maximal element of the set of all proper ideals of with respect to the partial order .   "
},
{
  "id": "eg_division_ring",
  "level": "2",
  "url": "s_prime_maximal.html#eg_division_ring",
  "type": "Example",
  "number": "2.68",
  "title": "Division ring.",
  "body": " Division ring   Let be a division ring. Prove that is the only maximal ideal of .    Indeed, is the only proper ideal of , since if an contains a nonzero element , then since is a unit it follows easily that . Thus is maximal.   "
},
{
  "id": "eg_maximal_ideals_M_nF",
  "level": "2",
  "url": "s_prime_maximal.html#eg_maximal_ideals_M_nF",
  "type": "Example",
  "number": "2.69",
  "title": "Maximal ideals of <span class=\"process-math\">\\(M_n(F)\\)<\/span>.",
  "body": " Maximal ideals of   Let be a field, and let be a positive integer. Prove that is a maximal ideal of .    You have shown on your homework that the only ideals of are of the form where is an ideal of . Since the only ideals of are and , it follows that is the only proper ideal of , and hence maximal.   "
},
{
  "id": "eg_max_ideals_Z",
  "level": "2",
  "url": "s_prime_maximal.html#eg_max_ideals_Z",
  "type": "Example",
  "number": "2.70",
  "title": "Maximal ideals of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Maximal ideals of   Let be a nonnegative integer. Prove that the ideal is maximal if and only if is prime.    We have .   "
},
{
  "id": "d_prime_ideal",
  "level": "2",
  "url": "s_prime_maximal.html#d_prime_ideal",
  "type": "Definition",
  "number": "2.71",
  "title": "Prime ideal.",
  "body": " Prime ideal   Let be a commutative ring. An ideal of is prime if and the following condition holds: for all , if , then or . Using logical shorthand: is prime if and .   "
},
{
  "id": "th_prime_maximal_ideals",
  "level": "2",
  "url": "s_prime_maximal.html#th_prime_maximal_ideals",
  "type": "Theorem",
  "number": "2.72",
  "title": "Prime and maximal ideals.",
  "body": " Prime and maximal ideals   Let be a ring.   An ideal of is maximal if and only if is simple.    Assume is commutative. An ideal of is prime if and only if is an integral domain.    Assume is commutative. An ideal of is maximal if and only if is a field.    Assume is commutative. All maximal ideals of are prime ideals.          By the fourth isomorphism theorem, the ideals of are in bijective correspondence with the ideals of containing . The result now follows immediately from the definitions of maximal ideal and simple ring.    We have integral if and only if implies or for all if and only if implies or for all , if and only if implies or for all , if and only if is prime.    From (1), is maximal if and only if is simple. It is easy to see that for commutative rings, simple is equivalent to being a field.    Since all fields are integral domains, and now imply that all maximal ideals are prime.      "
},
{
  "id": "eg_prime_max_integers",
  "level": "2",
  "url": "s_prime_maximal.html#eg_prime_max_integers",
  "type": "Example",
  "number": "2.73",
  "title": "Prime and maximal ideals of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Prime and maximal ideals of   Let be a positive integer. Show that the following statements are equivalent.    is prime.     is maximal.     is a prime integer.       We have seen previously that for positive , the ring is an integral domain if and only if it is a field, if and only if is a prime integer. The result now follows from .   "
},
{
  "id": "ss_prime_max_ideals-11",
  "level": "2",
  "url": "s_prime_maximal.html#ss_prime_max_ideals-11",
  "type": "Remark",
  "number": "2.74",
  "title": "Prime integers.",
  "body": " Prime integers  From the equivalence of (1) and (3) in , it follows that a positive integer is a prime integer if and only if is a prime ideal, if and only if implies or for all integers . We have thus derived, in a roundabout way, an equivalent formulation of being prime. (Recall that our original definition of a prime integer is one that has exactly two positive divisors: 1 and itself.) We will study the notion of a prime elements in arbitrary commutative rings down the line, and will in fact adopt this alternate formulation as our definition.  "
},
{
  "id": "d_partial_order",
  "level": "2",
  "url": "s_prime_maximal.html#d_partial_order",
  "type": "Definition",
  "number": "2.75",
  "title": "Partial order.",
  "body": " Partial order   A partial order on a nonempty set is a binary relation satisfying the following properties.   Reflexivity   for all     Antisymmetry  If and , then .    Transitivity  If and , then .   A partially ordered set (or POSET ) is a pair where is a partial order on .  Let be a POSET. A subset is totally ordered (or a chain ) with respect to if for all , either or . An upper bound of is an element such that for all . An element is a maximal element of if implies for all ; similarly, is a minimal element of if implies for all .   "
},
{
  "id": "th_zorns_lemma",
  "level": "2",
  "url": "s_prime_maximal.html#th_zorns_lemma",
  "type": "Theorem",
  "number": "2.76",
  "title": "Zorn’s lemma.",
  "body": " Zorn's lemma   If is a nonempty POSET for which every totally ordered subset has an upper bound, then has a maximal element.    Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most set theory textbooks.   "
},
{
  "id": "ss_zorn-5",
  "level": "2",
  "url": "s_prime_maximal.html#ss_zorn-5",
  "type": "Remark",
  "number": "2.77",
  "title": "“Totally ordered” versus “chain”.",
  "body": " Totally ordered versus chain  We prefer the term totally ordered to chain , as the latter connotes a countable set. This is important, as to verify the conditions of Zorn's lemma, we must consider all totally ordered subsets, countable or not. It is not enough to just look at countable totally ordered subsets .  "
},
{
  "id": "th_max_ideals_exist",
  "level": "2",
  "url": "s_prime_maximal.html#th_max_ideals_exist",
  "type": "Theorem",
  "number": "2.78",
  "title": "Maximal ideals exist.",
  "body": " Maximal ideals exist   Let be a ring, and let be a proper ideal of ( , ). There exists a maximal ideal of containing . In particular, if is nonzero, then contains a maximal ideal.    First observe that the second statement follows from the first by taking the ideal : a maximal ideal containing is the same thing as a maximal ideal.  Now let be a proper ideal of , and let be the set of all proper ideals of containing : . Note that is nonempty since . The binary relation given by set inclusion gives the structure of a POSET. We use Zorn's lemma to show that has a maximal element with respect to .  Consider any subset that is totally ordered with respect to . We must show that has an upper bound in . To this end we let . It is clear that for all , so it remains to show that : that is, we must show that (i) is an ideal containing , and (ii) .  Since for all , and since is the union of all such ideals, we have . To show is an ideal, we must show that it is a subgroup of and is closed under left and right multiplication by elements of . Since , we have . Now take . By definition we have and for some ideals . Since is totally ordered, we have either or . Assuming without loss of generality that the first condition holds, we may assume that . Since is an ideal it follows that , and thus that . This shows that is an ideal.  Next we show that . This is a consequence of the fact that in any ring for an ideal if and only if . Since for all , it follows that for all , and hence that . Thus .  Having verified the conditions of Zorn's lemma for all nonempty well-ordered subsets of , we conclude that has a maximal element . By definition and . We conclude our proof by showing that is maximal. Suppose for some proper ideal : then by definition, and hence by maximality. Thus is a maximal ideal of .   "
},
{
  "id": "rem_zorn_max_ideals",
  "level": "2",
  "url": "s_prime_maximal.html#rem_zorn_max_ideals",
  "type": "Remark",
  "number": "2.79",
  "title": "Zorn’s lemma and maximal ideals.",
  "body": " Zorn's lemma and maximal ideals  You might wonder whether there is a proof of the existence of maximal ideals that does not rely on Zorn's lemma. Surprisingly, we can say with assurance that the answer is no! As it turns out, not only does Zorn's lemma imply the existence of maximal ideals, but the converse is also true: the existence of maximal ideals in arbitrary rings implies Zorn's lemma. As a result, the following statements are all equivalent.   Zorn's lemma.    Any nonzero ring has a maximal ideal.    The axiom of choice: if is a family of nonempty sets indexed by the nonempty set , then is nonempty. (In other words, there is a way to choose for each , an element of in order to form a tuple .)   In fact, we can add a few more equivalent statements to the list. The three statements above can be shown to be equivalent to the following statements.   Every vector space has a basis.    Arbitrary products of compact topological spaces are compact. (Tychonoff's theorem).    Every set admits a total order satisfying the well-ordering principle: , every nonempty subset of has a minimal element with respect to . (Well-ordering theorem.)   It is quite a wonder that these six statements, which on the surface seem to say very different things, are in fact all equivalent. Moreover, on a psychological level there is a great range of plausibility among the various statements: whereas the axiom of choice seems intuitively obvious, the well-ordering principle is quite a shocker, since it would imply that even admits some mysterious well-ordering. This is the basis of the following bon mot attributed to Jerry Bona, professor emeritus at UIC: The axiom of choice is obviously true, the well-ordering theorem obviously false, and who can tell about Zorn's lemma?   "
},
{
  "id": "s_prime_max_poly",
  "level": "1",
  "url": "s_prime_max_poly.html",
  "type": "Section",
  "number": "2.8",
  "title": "Case study: polynomial rings",
  "body": " Case study: polynomial rings   The integers furnish us with a nice example where we can completely analyze a rings ideal structure, including its prime and maximal ideals, as well as its quotients. In this section we will look at another case study: polynomial rings , where is a field. As you will see, the ideal structure of has many similarities with that of the integers. We will see later that these similarities are the result of a deeper similarity between the two rings: namely, that both are examples of Euclidean domains . Our discussion will also include concrete descriptions of the quotients of polynomial rings , which in turn provide us with many new examples of rings to work. In particular, the construction of fields as quotients where is a maximal ideal will play an important role in our development of field theory in Math 331-3.    Division algorithm for polynomials  Although we will mainly be interested in polynomial rings over fields, we begin with a useful result that applies to general polynomial rings.   Division algorithm for polynomials   Let be a nontrivial commutative ring, and let be a nonzero polynomial whose leading coefficient is a unit: , we have , where . Given a polynomial , there is a unique pair of polynomials satisfying the following properties.    .     .       We need to prove two things: that given any there are polynomials satisfying properties (i) and (ii), and furthermore that the pair is unique.  We begin with existence. Let be the set of all pairs of polynomials satisfying condition (i) (but not necessarily (ii)). We will show that there is a pair that also satisfies (ii). Observe that is nonempty, since in particular it contains the pair . If , then this pair satisfies (ii) since ( being a nonzero polynomial). Otherwise, let be an element of for which has minimal finite degree. (Such a pair exists since the set is a nonempty subset of , and hence has a minimal element.) We claim that , and hence that satisfies (ii). Suppose, by contradiction, that with . Since the leading term of is a unit, we can write , where , and where has degree at most . But then we have , showing that and . This contradicts the minimality of . Thus , and we are done.  We now prove that there is exactly one pair satisfying (i) and (ii). Indeed, suppose and both satisfy these properties. From , it follows that . If , then since the leading coefficient of is a unit, it is easy to see that . But then we would have , a contradiction since . Thus , from which it follows that . We conclude that and , and thus that , as desired.     Polynomial division with remainder   Let be a nontrivial commutative ring, and let be a nonzero polynomial whose leading coefficient is a unit. Given a polynomial we call the unique polynomials and satisfying the two conditions of the quotient and remainder upon division of by .    The following result is a corollary of the division algorithm theorem, but is important enough to be deemed a theorem.   Quotients of polynomial rings   Let be a nontrivial commutative ring, and let be a polynomial of degree whose leading coefficient is a unit in . Additionally, let and write for all , so that in particular we have .   The restriction is injective. Thus we can identify with , and we will write for all .    For all we have , where is the remainder upon division of by .    Every element of can be written in the form , where for all , and this representation is unique in the following sense: we have with if and only if for all .       For (1) it suffices to show that . Since , and since for any ( ), it is easy to see that if and only if if and thus .  Next, given and writing as in the division algorithm, we see that . This proves (2).  Lastly, given any , let be its remainder upon division by . Since , we may write for elements . From (2) we have . Thus every element of the quotient can be expressed in the desired form. Lastly, to see that this expression is unique, if we have , then we have , where and thus . But any nonzero element of must have degree at least , since for any nonzero polynomial . It follows that and thus that for all .     Quotients of polynomial rings  Note that is an -algebra, with structural ring homomorphism given by the composition . Once we have the language of modules at our disposal, we will be able to summarize (2) of by saying that is an -algebra that is free of rank as an -module.  For now we content ourselves with a special case of this observation. Namely, when is a field, then is an -algebra and hence an -vector space. In this context, (2) of tells us that is a basis of as an -vector space, and hence that as an -vector space.     Polynomial rings over fields   Principal ideal domain   A principal ideal domain (PID) is an integral domain in which every ideal is principal.    The integers are the quintessential example of a PID that is not a field. As we now show with the help of the , polynomial rings over fields furnish us with another interesting example. The proof is very similar to the one we gave for .   Polynomial ring over a field   If is a field, then is a principal ideal domain. In more detail, for every nonzero proper ideal , there is a unique monic polynomial such that .    First note that is an integral domain since is an integral domain, as we have seen previously.  As always we have and . Let be a proper nonzero ideal. Since , it contains no elements of . It follows that the set is a nonzero subset of , and thus has a minimal element . Let be an element of with . Since for all , we may assume without loss of generality that is monic. We will show that . It is clear that . For the other direction, given any , we may write , where . Since , and since has minimal degree among elements of , we see that , and . This proves that and hence that .  We now show that the monic polynomial with is unique. Suppose we have where and are monic. It follows that and , or equivalently and for polynomials . From , we conclude that . It follows that , and hence that for some constant . Since and are both monic, we conclude that and .     Divisibility   Let be a ring. Given elements , we say that  divides  in (or is a multiple of in ), written , if there is an element satisfying .     Prime and irreducible elements   Let be an integral domain.  A nonzero element is prime if implies or for all . Equivalently, is prime if the ideal is a nonzero prime ideal.  A nonzero, non-unit element is irreducible if implies or .  Elements are associates if for some unit .     Prime elements and prime ideals  Let be a commutative ring. It is easy to see that an element is prime (as in ) if and only if its principal ideal is prime (as in ).    Prime and maximal ideals of   Let be a field, and let be nonzero. The following statements are equivalent.    is an irreducible element of .     is a maximal ideal of .     is a prime ideal of .       Implication: (1) (2). Assume is irreducible and let be an ideal of satisfying . Since is a PID, we have , in which case is equivalent to . Since is irreducible, this implies is a unit, or , where is a unit. But then, either , or . This proves is maximal.  Implication: (2) (3). This implication is just a special instance of the more general fact that in a commutative ring all maximal ideals are prime ideals.  Implication: (3) (1). Assume is prime. As observed in , it follows that is a prime element of . Assume for some polynomials . Since is prime, we have or . In the first case, we have and hence . Since is integral and , it follows that and thus is a unit. Similarly, if , then is a unit. Thus implies is a unit or is a unit, and we conclude that is irreducible.     Comparing and  Let be a field. As should be clear by now there are a number of structural similarities between the rings and :   Both rings are PIDs.    In both rings, a ring element is prime if and only if it is irreducible.    In both rings the prime ideals consist of the zero ideal and ideals of the form , where is irreducible in the ring.    In both rings all nonzero prime ideals are maximal, generated by irreducible (equivalently, prime) elements.       allows us to easily produce maximal ideals of a polynomial ring ( a field). This in turn allows us to easily construct new fields as quotients of by these maximal ideals. Furthermore, gives us a concrete description of these quotients, allowing us to explore the arithmetic of these fields in a hands-on manner.   Quotient fields of   Let be a field, and let be irreducible of degree . The quotient ring is a field, as well as an -algebra of dimension .     Irreducible polynomials  Let be a field. It is easy to see that a polynomial is irreducible if and only if it has no factor of positive degree. Although in general it can be quite tricky to determine whether a polynomial is irreducible, for polynomials of degree at most 3, the situation is simpler, as we now summarize.   Degree 1  Every degree-1 polynomial is irreducible. Indeed, if , then since , we must have or . But then either is a unit or is a unit.    Degree 2  Let be a polynomial of degree 2. To have a nontrivial factorization , the same degree argument above implies that both and must be linear. Note that any linear polynomial has a root in (namely ). As a result, it follows that a polynomial has a linear factor if and only if we have for some : , if and only if has a root in . We conclude that a degree-2 polynomial is irreducible if and only if it has no roots in .    Degree 3  Again, looking at degrees, we see that if is a degree-3 polynomial, then has a nontrivial factorization if and only if one of the factors is linear. Thus, just as in the degree-2 case, we conclude that a degree-3 polynomial is irreducible if and only if it has no roots in .   Things become more complicated once our polynomials have degree 4 or higher: in particular, being irreducible is no longer equivalent to having no roots. For example, the polynomial is easily seen to have no roots in , and yet is manifestly reducible.    Quotients by linear polynials   Let be a field, and let be a linear ( , degree-1) polynomial in . Prove: .    Let be the surjective ring homomorphism defined as . Clearly, , and thus . Since is maximal ( is irreducible), and , we have . By the first isomorphism theorem, we conclude that .     Quotients of   Show that and are both fields, and are isomorphic to one another.    From the quadratic formula theorem, we see easily that the polynomials and have no roots in . It follows from that both polynomials are irreducible in , and hence that the corresponding quotients are fields. We prove that both are isomorphic to .  For , consider the ring homomorphism defined as . The map is clearly surjective, since for all . Furthermore, clearly, , since ; and since is maximal ( is irreducible), it follows that . The claim follows from the first isomorphism theorem.  Now consider , and let . Verify for yourself that is one of the two complex roots of ; is the other. Define as . Again, clearly , and since is maximal, we conclude that and . We claim that . This is not as obvious as in the previous case. However, from , we know that is a -dimensional -subspace of . Since itself is a -dimensional -vector space, we must have .     Field of cardinality 25   Construct an explicit field of cardinality     Consider the polynomial ring . Any quotient of the form is an -algebra that is of dimension 2 as an -vector space. As a result, any such ring satisfies . To produce a field, we simply must pick an irreducible quadratic polynomial ; and according to , this is equivalent to picking so that it has no roots in . Since only has 5 elements, it is easy to verify whether a given polynomial has a root in or not. Consider , for example. We simply need to compute a table of values to see that has two roots in ( and ), which corresponds to the factorization in . Thus is not irreducible, and the corresponding quotient is not a field. Indeed, from the factorization we see that and are nonzero elements of satisfying . Thus is not even an integral domain! (We will see in the next section that .)  Similar computations show that has no roots in and hence is irreducible. Thus is a field of cardinality . Concretetely, since in , we have for all . From this formula, it is easy to see that any nonzero element has inverse .     Finite fields  It turns out that there are exactly irreducible polynomials of the form in . Each of the corresponding quotients is thus a field of cardinality . Miraculously, these fields are all isomorphic! In fact, as we will prove in the next quarter, given any prime power there is exactly one field (up to isomorphism) of cardinality .    "
},
{
  "id": "th_div_alg_poly",
  "level": "2",
  "url": "s_prime_max_poly.html#th_div_alg_poly",
  "type": "Theorem",
  "number": "2.80",
  "title": "Division algorithm for polynomials.",
  "body": " Division algorithm for polynomials   Let be a nontrivial commutative ring, and let be a nonzero polynomial whose leading coefficient is a unit: , we have , where . Given a polynomial , there is a unique pair of polynomials satisfying the following properties.    .     .       We need to prove two things: that given any there are polynomials satisfying properties (i) and (ii), and furthermore that the pair is unique.  We begin with existence. Let be the set of all pairs of polynomials satisfying condition (i) (but not necessarily (ii)). We will show that there is a pair that also satisfies (ii). Observe that is nonempty, since in particular it contains the pair . If , then this pair satisfies (ii) since ( being a nonzero polynomial). Otherwise, let be an element of for which has minimal finite degree. (Such a pair exists since the set is a nonempty subset of , and hence has a minimal element.) We claim that , and hence that satisfies (ii). Suppose, by contradiction, that with . Since the leading term of is a unit, we can write , where , and where has degree at most . But then we have , showing that and . This contradicts the minimality of . Thus , and we are done.  We now prove that there is exactly one pair satisfying (i) and (ii). Indeed, suppose and both satisfy these properties. From , it follows that . If , then since the leading coefficient of is a unit, it is easy to see that . But then we would have , a contradiction since . Thus , from which it follows that . We conclude that and , and thus that , as desired.   "
},
{
  "id": "d_poly_division",
  "level": "2",
  "url": "s_prime_max_poly.html#d_poly_division",
  "type": "Definition",
  "number": "2.81",
  "title": "Polynomial division with remainder.",
  "body": " Polynomial division with remainder   Let be a nontrivial commutative ring, and let be a nonzero polynomial whose leading coefficient is a unit. Given a polynomial we call the unique polynomials and satisfying the two conditions of the quotient and remainder upon division of by .   "
},
{
  "id": "th_quot_poly",
  "level": "2",
  "url": "s_prime_max_poly.html#th_quot_poly",
  "type": "Theorem",
  "number": "2.82",
  "title": "Quotients of polynomial rings.",
  "body": " Quotients of polynomial rings   Let be a nontrivial commutative ring, and let be a polynomial of degree whose leading coefficient is a unit in . Additionally, let and write for all , so that in particular we have .   The restriction is injective. Thus we can identify with , and we will write for all .    For all we have , where is the remainder upon division of by .    Every element of can be written in the form , where for all , and this representation is unique in the following sense: we have with if and only if for all .       For (1) it suffices to show that . Since , and since for any ( ), it is easy to see that if and only if if and thus .  Next, given and writing as in the division algorithm, we see that . This proves (2).  Lastly, given any , let be its remainder upon division by . Since , we may write for elements . From (2) we have . Thus every element of the quotient can be expressed in the desired form. Lastly, to see that this expression is unique, if we have , then we have , where and thus . But any nonzero element of must have degree at least , since for any nonzero polynomial . It follows that and thus that for all .   "
},
{
  "id": "ss_div_alg-7",
  "level": "2",
  "url": "s_prime_max_poly.html#ss_div_alg-7",
  "type": "Remark",
  "number": "2.83",
  "title": "Quotients of polynomial rings.",
  "body": " Quotients of polynomial rings  Note that is an -algebra, with structural ring homomorphism given by the composition . Once we have the language of modules at our disposal, we will be able to summarize (2) of by saying that is an -algebra that is free of rank as an -module.  For now we content ourselves with a special case of this observation. Namely, when is a field, then is an -algebra and hence an -vector space. In this context, (2) of tells us that is a basis of as an -vector space, and hence that as an -vector space.  "
},
{
  "id": "d_pid",
  "level": "2",
  "url": "s_prime_max_poly.html#d_pid",
  "type": "Definition",
  "number": "2.84",
  "title": "Principal ideal domain.",
  "body": " Principal ideal domain   A principal ideal domain (PID) is an integral domain in which every ideal is principal.   "
},
{
  "id": "th_poly_ring_field",
  "level": "2",
  "url": "s_prime_max_poly.html#th_poly_ring_field",
  "type": "Theorem",
  "number": "2.85",
  "title": "Polynomial ring over a field.",
  "body": " Polynomial ring over a field   If is a field, then is a principal ideal domain. In more detail, for every nonzero proper ideal , there is a unique monic polynomial such that .    First note that is an integral domain since is an integral domain, as we have seen previously.  As always we have and . Let be a proper nonzero ideal. Since , it contains no elements of . It follows that the set is a nonzero subset of , and thus has a minimal element . Let be an element of with . Since for all , we may assume without loss of generality that is monic. We will show that . It is clear that . For the other direction, given any , we may write , where . Since , and since has minimal degree among elements of , we see that , and . This proves that and hence that .  We now show that the monic polynomial with is unique. Suppose we have where and are monic. It follows that and , or equivalently and for polynomials . From , we conclude that . It follows that , and hence that for some constant . Since and are both monic, we conclude that and .   "
},
{
  "id": "d_divisibility",
  "level": "2",
  "url": "s_prime_max_poly.html#d_divisibility",
  "type": "Definition",
  "number": "2.86",
  "title": "Divisibility.",
  "body": " Divisibility   Let be a ring. Given elements , we say that  divides  in (or is a multiple of in ), written , if there is an element satisfying .   "
},
{
  "id": "d_prime_irreducible",
  "level": "2",
  "url": "s_prime_max_poly.html#d_prime_irreducible",
  "type": "Definition",
  "number": "2.87",
  "title": "Prime and irreducible elements.",
  "body": " Prime and irreducible elements   Let be an integral domain.  A nonzero element is prime if implies or for all . Equivalently, is prime if the ideal is a nonzero prime ideal.  A nonzero, non-unit element is irreducible if implies or .  Elements are associates if for some unit .   "
},
{
  "id": "rem_prime_element_ideal",
  "level": "2",
  "url": "s_prime_max_poly.html#rem_prime_element_ideal",
  "type": "Remark",
  "number": "2.88",
  "title": "Prime elements and prime ideals.",
  "body": " Prime elements and prime ideals  Let be a commutative ring. It is easy to see that an element is prime (as in ) if and only if its principal ideal is prime (as in ).  "
},
{
  "id": "th_max_prime_poly",
  "level": "2",
  "url": "s_prime_max_poly.html#th_max_prime_poly",
  "type": "Theorem",
  "number": "2.89",
  "title": "Prime and maximal ideals of <span class=\"process-math\">\\(F[x]\\)<\/span>.",
  "body": " Prime and maximal ideals of   Let be a field, and let be nonzero. The following statements are equivalent.    is an irreducible element of .     is a maximal ideal of .     is a prime ideal of .       Implication: (1) (2). Assume is irreducible and let be an ideal of satisfying . Since is a PID, we have , in which case is equivalent to . Since is irreducible, this implies is a unit, or , where is a unit. But then, either , or . This proves is maximal.  Implication: (2) (3). This implication is just a special instance of the more general fact that in a commutative ring all maximal ideals are prime ideals.  Implication: (3) (1). Assume is prime. As observed in , it follows that is a prime element of . Assume for some polynomials . Since is prime, we have or . In the first case, we have and hence . Since is integral and , it follows that and thus is a unit. Similarly, if , then is a unit. Thus implies is a unit or is a unit, and we conclude that is irreducible.   "
},
{
  "id": "ss_poly_ring_fields-9",
  "level": "2",
  "url": "s_prime_max_poly.html#ss_poly_ring_fields-9",
  "type": "Remark",
  "number": "2.90",
  "title": "Comparing <span class=\"process-math\">\\(\\Z\\)<\/span> and <span class=\"process-math\">\\(F[x]\\)<\/span>.",
  "body": " Comparing and  Let be a field. As should be clear by now there are a number of structural similarities between the rings and :   Both rings are PIDs.    In both rings, a ring element is prime if and only if it is irreducible.    In both rings the prime ideals consist of the zero ideal and ideals of the form , where is irreducible in the ring.    In both rings all nonzero prime ideals are maximal, generated by irreducible (equivalently, prime) elements.     "
},
{
  "id": "cor_quotient_fields",
  "level": "2",
  "url": "s_prime_max_poly.html#cor_quotient_fields",
  "type": "Corollary",
  "number": "2.91",
  "title": "Quotient fields of <span class=\"process-math\">\\(F[x]\\)<\/span>.",
  "body": " Quotient fields of   Let be a field, and let be irreducible of degree . The quotient ring is a field, as well as an -algebra of dimension .   "
},
{
  "id": "rem_irr_poly",
  "level": "2",
  "url": "s_prime_max_poly.html#rem_irr_poly",
  "type": "Remark",
  "number": "2.92",
  "title": "Irreducible polynomials.",
  "body": " Irreducible polynomials  Let be a field. It is easy to see that a polynomial is irreducible if and only if it has no factor of positive degree. Although in general it can be quite tricky to determine whether a polynomial is irreducible, for polynomials of degree at most 3, the situation is simpler, as we now summarize.   Degree 1  Every degree-1 polynomial is irreducible. Indeed, if , then since , we must have or . But then either is a unit or is a unit.    Degree 2  Let be a polynomial of degree 2. To have a nontrivial factorization , the same degree argument above implies that both and must be linear. Note that any linear polynomial has a root in (namely ). As a result, it follows that a polynomial has a linear factor if and only if we have for some : , if and only if has a root in . We conclude that a degree-2 polynomial is irreducible if and only if it has no roots in .    Degree 3  Again, looking at degrees, we see that if is a degree-3 polynomial, then has a nontrivial factorization if and only if one of the factors is linear. Thus, just as in the degree-2 case, we conclude that a degree-3 polynomial is irreducible if and only if it has no roots in .   Things become more complicated once our polynomials have degree 4 or higher: in particular, being irreducible is no longer equivalent to having no roots. For example, the polynomial is easily seen to have no roots in , and yet is manifestly reducible.  "
},
{
  "id": "eg_poly_quot_linear",
  "level": "2",
  "url": "s_prime_max_poly.html#eg_poly_quot_linear",
  "type": "Example",
  "number": "2.93",
  "title": "Quotients by linear polynials.",
  "body": " Quotients by linear polynials   Let be a field, and let be a linear ( , degree-1) polynomial in . Prove: .    Let be the surjective ring homomorphism defined as . Clearly, , and thus . Since is maximal ( is irreducible), and , we have . By the first isomorphism theorem, we conclude that .   "
},
{
  "id": "eg_quot_real_poly",
  "level": "2",
  "url": "s_prime_max_poly.html#eg_quot_real_poly",
  "type": "Example",
  "number": "2.94",
  "title": "Quotients of <span class=\"process-math\">\\(\\R[x]\\)<\/span>.",
  "body": " Quotients of   Show that and are both fields, and are isomorphic to one another.    From the quadratic formula theorem, we see easily that the polynomials and have no roots in . It follows from that both polynomials are irreducible in , and hence that the corresponding quotients are fields. We prove that both are isomorphic to .  For , consider the ring homomorphism defined as . The map is clearly surjective, since for all . Furthermore, clearly, , since ; and since is maximal ( is irreducible), it follows that . The claim follows from the first isomorphism theorem.  Now consider , and let . Verify for yourself that is one of the two complex roots of ; is the other. Define as . Again, clearly , and since is maximal, we conclude that and . We claim that . This is not as obvious as in the previous case. However, from , we know that is a -dimensional -subspace of . Since itself is a -dimensional -vector space, we must have .   "
},
{
  "id": "eg_field_25",
  "level": "2",
  "url": "s_prime_max_poly.html#eg_field_25",
  "type": "Example",
  "number": "2.95",
  "title": "Field of cardinality 25.",
  "body": " Field of cardinality 25   Construct an explicit field of cardinality     Consider the polynomial ring . Any quotient of the form is an -algebra that is of dimension 2 as an -vector space. As a result, any such ring satisfies . To produce a field, we simply must pick an irreducible quadratic polynomial ; and according to , this is equivalent to picking so that it has no roots in . Since only has 5 elements, it is easy to verify whether a given polynomial has a root in or not. Consider , for example. We simply need to compute a table of values to see that has two roots in ( and ), which corresponds to the factorization in . Thus is not irreducible, and the corresponding quotient is not a field. Indeed, from the factorization we see that and are nonzero elements of satisfying . Thus is not even an integral domain! (We will see in the next section that .)  Similar computations show that has no roots in and hence is irreducible. Thus is a field of cardinality . Concretetely, since in , we have for all . From this formula, it is easy to see that any nonzero element has inverse .   "
},
{
  "id": "ss_poly_ring_fields-16",
  "level": "2",
  "url": "s_prime_max_poly.html#ss_poly_ring_fields-16",
  "type": "Remark",
  "number": "2.96",
  "title": "Finite fields.",
  "body": " Finite fields  It turns out that there are exactly irreducible polynomials of the form in . Each of the corresponding quotients is thus a field of cardinality . Miraculously, these fields are all isomorphic! In fact, as we will prove in the next quarter, given any prime power there is exactly one field (up to isomorphism) of cardinality .  "
},
{
  "id": "s_crt",
  "level": "1",
  "url": "s_crt.html",
  "type": "Section",
  "number": "2.9",
  "title": "Chinese remainder theorem",
  "body": " Chinese remainder theorem   Chinese remainder theorem: general form  In its general form, the Chinese remainder theorem (CRT) articulates conditions for which a given ring can be expressed (up to isomorphism) as a direct product of rings. The result is a pervasive and useful tool in ring theory, often employed to prove some property of a given ring by exhibiting an isomorphism between and a product ring , and proving a similar result for the (often simpler rings) , and then using the simple structure of product rings to lift the result back to .  The specific conditions laid out by the CRT involve quotients of rings by pairwise relatively prime ideals .   Relatively prime ideals   Let be a nonzero commutative ring. Ideals and of are relatively prime if . Equivalently, and are relatively prime if we can write for some and .     Chinese remainder theorem (CRT)   Let be a commutative ring, and let be ideals of . For all , we let be the quotient map, and we define .    is a ring homomorphism with kernel .     is surjective if and only if the ideals are pairwise relatively prime: , for all .    If the ideals are pairwise relatively prime, then , and we have .          That is a ring homomorphism follows easily from the ring structure on . As for the statement about the kernel, we have .           Since a ring isomorphism restricts to an isomorphism between the unit groups and , and since for any product ring we have , we immediately obtain the following corollary.   CRT for unit groups   Let be a commutative ring, let be a collection of pairwise relatively prime ideals of , and let . The map is an isomorphism of groups.      CRT: the integers  In a PID we have an alternative formulation for when two ideals are relatively prime.   Relatively prime ideals in PID   Let and be ideals of the PID . The following statements are equivalent.    and are relatively prime.         If satisfies and , then is a unit.        CRT: integers   Let be pairwise relatively prime integers ( , for all ), and let .   The map is an isomorphism of rings.    The map is an isomorphism of groups.    For any choice of integers , the set of satisfying the system of congruences forms a unique congruence class modulo . That is, (i) there is a solution to this system of congruences, and (ii) is another solution if and only if .        Euler's totient function    Euler's totient function is the function defined as . In other words, is the number of integers in that are relatively prime to .     Euler's totient function   Let be the Euler totient function. If are pairwise relatively prime integers, then . Additionally, given , where the are distinct prime integers, we have .    Statement (1) follows immediately from and the fact (proven elsewhere) that . For (2), observe first the if and are distinct prime integers, then for any positive integers and . Thus given the factorization , we have by (1). Furthermore, for any prime power an integer is relatively prime to if and only if it is not divisible by , if and only if it is not a multiple of . The set of multiples of in is , which has cardinality . Thus .     "
},
{
  "id": "d_rel_prime_ideals",
  "level": "2",
  "url": "s_crt.html#d_rel_prime_ideals",
  "type": "Definition",
  "number": "2.97",
  "title": "Relatively prime ideals.",
  "body": " Relatively prime ideals   Let be a nonzero commutative ring. Ideals and of are relatively prime if . Equivalently, and are relatively prime if we can write for some and .   "
},
{
  "id": "th_crt",
  "level": "2",
  "url": "s_crt.html#th_crt",
  "type": "Theorem",
  "number": "2.98",
  "title": "Chinese remainder theorem (CRT).",
  "body": " Chinese remainder theorem (CRT)   Let be a commutative ring, and let be ideals of . For all , we let be the quotient map, and we define .    is a ring homomorphism with kernel .     is surjective if and only if the ideals are pairwise relatively prime: , for all .    If the ideals are pairwise relatively prime, then , and we have .          That is a ring homomorphism follows easily from the ring structure on . As for the statement about the kernel, we have .          "
},
{
  "id": "cor_crt_units",
  "level": "2",
  "url": "s_crt.html#cor_crt_units",
  "type": "Corollary",
  "number": "2.99",
  "title": "CRT for unit groups.",
  "body": " CRT for unit groups   Let be a commutative ring, let be a collection of pairwise relatively prime ideals of , and let . The map is an isomorphism of groups.   "
},
{
  "id": "prop_pid_rel_prime",
  "level": "2",
  "url": "s_crt.html#prop_pid_rel_prime",
  "type": "Proposition",
  "number": "2.100",
  "title": "Relatively prime ideals in PID.",
  "body": " Relatively prime ideals in PID   Let and be ideals of the PID . The following statements are equivalent.    and are relatively prime.         If satisfies and , then is a unit.      "
},
{
  "id": "th_crt_integers",
  "level": "2",
  "url": "s_crt.html#th_crt_integers",
  "type": "Theorem",
  "number": "2.101",
  "title": "CRT: integers.",
  "body": " CRT: integers   Let be pairwise relatively prime integers ( , for all ), and let .   The map is an isomorphism of rings.    The map is an isomorphism of groups.    For any choice of integers , the set of satisfying the system of congruences forms a unique congruence class modulo . That is, (i) there is a solution to this system of congruences, and (ii) is another solution if and only if .      "
},
{
  "id": "d_euler_totient",
  "level": "2",
  "url": "s_crt.html#d_euler_totient",
  "type": "Definition",
  "number": "2.102",
  "title": "Euler’s totient function.",
  "body": " Euler's totient function    Euler's totient function is the function defined as . In other words, is the number of integers in that are relatively prime to .   "
},
{
  "id": "cor_tot_func",
  "level": "2",
  "url": "s_crt.html#cor_tot_func",
  "type": "Corollary",
  "number": "2.103",
  "title": "Euler’s totient function.",
  "body": " Euler's totient function   Let be the Euler totient function. If are pairwise relatively prime integers, then . Additionally, given , where the are distinct prime integers, we have .    Statement (1) follows immediately from and the fact (proven elsewhere) that . For (2), observe first the if and are distinct prime integers, then for any positive integers and . Thus given the factorization , we have by (1). Furthermore, for any prime power an integer is relatively prime to if and only if it is not divisible by , if and only if it is not a multiple of . The set of multiples of in is , which has cardinality . Thus .   "
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
