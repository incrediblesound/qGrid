#include "structures.h"

void add_outgoing_link(struct Node *a, struct Link *l);

void add_incoming_link(struct Node *a, struct Link *l);

int compare(struct Node *a, struct Node *n);

int has_state_check(struct Node *a, struct Node *b);

void add_to_array(struct Array *a, struct Node *b);

void add_outgoing(struct Array *base, struct Node *target);

struct Array *compile_states(struct Node *node);

int deep_match(struct Node *a, struct Node *b);

void has_state(struct Node *a, struct Node *b);

int custom_relation_match(struct Link *rel, struct Node *a, struct Node *b);

int custom_relation_check(struct Node *rel, struct Node *a, struct Node *b);

void custom_relation(struct Node *rel, struct Node *a, struct Node *b);