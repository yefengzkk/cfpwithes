1{occurs(A,I), neg_occurs(A,I)}1 :- action(A), step(I).
:- occurs(A,I),occurs(B,I),step(I), neg_equal(A,B).

equal(A,A):- action(A).
neg_equal(A,B):- action(A), action(B), not equal(A,B).

something_happened(I):- occurs(A,I),step(I).

:- not something_happended(I),step(I).

step(0).
step(1).
action(a).
action(b).
holds(p,0).
holds(r,0).
1{holds(q,0), neg_holds(q,0)}1.
1{holds(s,0), neg_holds(s,0)}1.

holds(q,I+1) :-  occurs(a,I), holds(p,I), step(I).

neg_holds(s,I+1) :-  occurs(a,I), holds(r,I), step(I).

holds(s,I+1) :-  occurs(b,I), holds(q,I), step(I).

goal(I) :- holds(q,I),holds(s,I).
success :- goal(I).
:- not success.
%%success :- goal(0).
%%success :- goal(1).
%%success:- goal(2), K occurs(A, 0), K occurs(B, 1).
 
%%success(I):- K occurs(A, I), step(I).
%%ok :- -K goal(2).
%%:- ok.
%%:- not success(I), step(I).
 
holds(X,I+1) :- holds(X,I), not neg_holds(X,I+1), step(I).
neg_holds(X,I+1) :- neg_holds(X,I), not holds(X, I+1), step(I).