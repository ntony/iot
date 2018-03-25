package in.energiasolutions.iot.iot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class SampleDataInitializer implements CommandLineRunner{

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public void run(String... args) throws Exception {

        Map<String,Boolean> switches = new HashMap<>(0);
        switches.put("Switch1", true);
        switches.put("Switch2", false);
        switches.put("Switch3", true);
        switches.put("Switch4", false);
        switches.put("Switch5", true);

        if (deviceRepository.count()==0){
            deviceRepository.save(new Device("Device1", switches));
            deviceRepository.save(new Device("Device2", switches));
        }
    }
}
