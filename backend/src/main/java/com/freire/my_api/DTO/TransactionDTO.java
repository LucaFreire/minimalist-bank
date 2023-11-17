package com.freire.my_api.DTO;

import lombok.Data;

@Data
public class TransactionDTO {
    String payerID;
    String payeeAnyIdentifier;
    Double value;
}