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

    @Autowired
    private MonitorRepository monitorRepository;

    @Autowired
    private DeviceLogRepository deviceLogRepository;

    @Override
    public void run(String... args) throws Exception {

        if (deviceRepository.count()==0){
            Map<String,Boolean> switches = new HashMap<>(0);
            switches.put("Switch1", true);
            switches.put("Switch2", false);
            switches.put("Switch3", true);
            switches.put("Switch4", false);
            switches.put("Switch5", true);
            deviceRepository.save(new Device("Device1", switches));
            deviceRepository.save(new Device("Device2", switches));
        }

        if (monitorRepository.count()==0){
            Monitor monitor = new Monitor("Car Monitor");
            monitor = monitorRepository.save(monitor);
            deviceLogRepository.save(new DeviceLog("Temperature","100",monitor));
            deviceLogRepository.save(new DeviceLog("Pressure","33",monitor));
            deviceLogRepository.save(new DeviceLog("Fuel level","35",monitor));
            deviceLogRepository.save(new DeviceLog("Mileage","13",monitor));
            deviceLogRepository.save(new DeviceLog("Temperature","99",monitor));
            deviceLogRepository.save(new DeviceLog("Pressure","33",monitor));
        }
    }
}
