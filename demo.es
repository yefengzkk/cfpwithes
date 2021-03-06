%%action generation
occurs(A,I) or neg_occurs(A,I) :- action(A), step(I).
:- occurs(A,I),occurs(B,I),step(I), neg_equal(A,B).
:- occurs(A,I), neg_occurs(A,I).

equal(A,A):- action(A).
neg_equal(A,B):- action(A), action(B), not equal(A,B).

something_happened(I):- occurs(A,I),step(I).

:- not something_happened(I),step(I).

%%initial state
step(0).
step(1).
action(a).
action(b).
holds(p,0).
holds(r,0).

%%action theory
%%holds(q,I+1) :-  occurs(a,I), K holds(p,I), step(I).
holds(q,I+1) :-  occurs(a,I), not neg_holds(p,I), step(I).

%%neg_holds(s,I+1) :-  occurs(a,I), K holds(r,I), step(I).
neg_holds(s,I+1) :-  occurs(a,I), not neg_holds(r,I), step(I).

%%holds(s,I+1) :-  occurs(b,I), K holds(q,I), step(I).
holds(s,I+1) :-  occurs(b,I), not neg_holds(q,I), step(I).

%%goal
goal(I) :- holds(q,I),holds(s,I).
success :- goal(I).
%%:- -K success.
:- not success.
 
%%holds(X,I+1) :- holds(X,I), not neg_holds(X,I+1), step(I).
%%neg_holds(X,I+1) :- neg_holds(X,I), not holds(X, I+1), step(I).

%%inertial law
holds(q,I+1) :- holds(q,I), not neg_holds(q,I+1), step(I).
neg_holds(q,I+1) :- neg_holds(q,I), not holds(q,I+1), step(I).

holds(s,I+1) :- holds(s,I), not neg_holds(s,I+1), step(I).
neg_holds(s,I+1) :- neg_holds(s,I), not holds(s,I+1), step(I).

holds(p,I+1) :- holds(p,I), not neg_holds(p,I+1), step(I).
neg_holds(p,I+1) :- neg_holds(p,I), not holds(p,I+1), step(I).

holds(r,I+1) :- holds(r,I), not neg_holds(r,I+1), step(I).
neg_holds(r,I+1) :- neg_holds(r,I), not holds(r,I+1), step(I).