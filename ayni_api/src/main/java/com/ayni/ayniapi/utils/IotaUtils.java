package com.ayni.ayniapi.utils;

import org.iota.jota.IotaAPI;
import org.iota.jota.dto.response.SendTransferResponse;
import org.iota.jota.error.ArgumentException;
import org.iota.jota.model.Transfer;
import org.iota.jota.utils.SeedRandomGenerator;
import org.iota.jota.utils.TrytesConverter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IotaUtils {

    public String senDataTangle(String data) {

        final IotaAPI api = new IotaAPI.Builder()
                .protocol("https")
                .host("nodes.iota.org")
                .port(443)
                .build();
        int depth = 3;
        int minimumWeightMagnitude = 14;
        String address = "LRYORCSUVLWKTESMCGVJLUPXRSKXWGERJAXDNQBZGCIUCNILFXLZWJLSIVKVY9DNSSOLFWYVBBZQIIFOXIWDB9HNPC";
        String myRandomSeed = SeedRandomGenerator.generateNewSeed();
        int securityLevel = 2;

        String message = TrytesConverter.asciiToTrytes(data);
        String tag = "AYNIPROJECT";
        int value = 0;

        Transfer zeroValueTransaction = new Transfer(address, value, message, tag);
        ArrayList<Transfer> transfers = new ArrayList<Transfer>();

        transfers.add(zeroValueTransaction);
        try {
            SendTransferResponse response = api.sendTransfer(myRandomSeed, securityLevel, depth, minimumWeightMagnitude, transfers, null, null, false, false, null);
            return response.getTransactions().get(0).getHash();

        } catch (ArgumentException e) {
            e.printStackTrace();
            return null;
        }
    }
}
