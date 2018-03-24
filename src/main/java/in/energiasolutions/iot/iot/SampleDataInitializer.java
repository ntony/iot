package in.energiasolutions.iot.iot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SampleDataInitializer implements CommandLineRunner{

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public void run(String... args) throws Exception {
        if (deviceRepository.count()==0){
            deviceRepository.save(new Device("Device1",null));
            deviceRepository.save(new Device("Device2",null));
        }
    }
}
